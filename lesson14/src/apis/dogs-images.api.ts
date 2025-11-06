import { IHttpService } from '../services/i-http.service';
import { FetchHttpService } from '../services/fetch-http.service';
import { ImageDto } from '../models/image.dto';
import * as fs from 'fs';

export class DogsImagesApi {
    private httpService: IHttpService<Response>;

    public constructor(
        private baseUrl: string,
        private apiKey: string
    ) {
        this.httpService = new FetchHttpService(this.baseUrl, { apiKey: this.apiKey });
    }

    public async uploadImage(imagePath: string, subId?: string, breeds?: string[]): Promise<[Response, ImageDto]> {
        const formData = new FormData();
        const file = fs.readFileSync(imagePath);
        // node 24.x
        const binaryFile = new File([new Uint8Array(file)], 'the_dog_1.jpg', { type: 'image/jpeg' });

        // node 22.x
        // const binaryFile = new File([file], 'the_dog_1.jpg', { type: 'image/jpeg' });

        formData.append('file', binaryFile);
        subId && formData.append('sub_id', subId);
        breeds && formData.append('breeds', breeds.join(','));
        console.log(breeds);

        const response = await this.httpService.postForm('/images/upload', formData);

        const imageResponse = await response.json();

        return [response, imageResponse];
    }

    public async getMyImages(): Promise<[Response, ImageDto[]]> {
        const response = await this.httpService.get('/images');
        const images = await response.json();

        return [response, images];
    }
}
