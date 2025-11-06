import { expect } from 'chai';
import { describe } from 'mocha';
import { DogsImagesApi } from '../src/apis/dogs-images.api';
import * as dotenv from 'dotenv';
import { ImageDto } from '../src/models/image.dto';

describe('This is a set of our first tests @API', () => {
    let dogImageApi: DogsImagesApi;
    dotenv.config();
    let imageParams: ImageDto;

    before(() => {
        dogImageApi = new DogsImagesApi('https://api.thedogapi.com/v1', process.env.API_KEY as string);
        console.log(globalThis.token);
    });

    it('the dogs /image/upload uploads the image and returns the response', async () => {
        const [response, image] = await dogImageApi.uploadImage('./artifacts/the_dog_1.jpg', 'ViLe');
        expect(response.status).to.equal(201);
        expect(image.id).to.exist.and.not.be.empty;
        expect(image).to.have.property('original_filename', 'the_dog_1.jpg');
        expect(image).to.have.property('sub_id', 'ViLe');
        imageParams = image;
    });

    it('check that uploaded image is returned when requesting all images', async () => {
        const [response, images] = await dogImageApi.getMyImages();
        expect(response.status).to.equal(200);
        expect(images).to.have.length.greaterThan(0);

        const myImage = images.find(image => image.id === imageParams.id);
        expect(myImage).to.exist.and.not.be.undefined;
        expect(myImage).to.have.property('original_filename', imageParams.original_filename);
        expect(myImage).to.have.property('sub_id', imageParams.sub_id);
        expect(myImage).to.have.property('width', imageParams.width);
        expect(myImage).to.have.property('height', imageParams.height);
        expect(myImage).to.have.property('url', imageParams.url);
    });
});
