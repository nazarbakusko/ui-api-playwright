import { stubConstructor } from 'ts-sinon';
import { UserService } from '../src/user-service';
import { DbService } from '../src/db.service';
import { expect } from 'chai';
import { faker } from '@faker-js/faker';
import sinon from 'sinon';
import { User } from '../src/user.dto';

describe('sinon example', () => {
    let userService: UserService;
    const mockedDbConnection = stubConstructor(DbService);

    before(() => {
        userService = new UserService(mockedDbConnection);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should find user', async () => {
        const expectedResult = { id: 1, name: 'John', age: 30 };
        mockedDbConnection.find.resolves(expectedResult);

        const user = await userService.find(1);
        expect(user).to.deep.equal(expectedResult);
    });

    it('should find user older then 30', async () => {
        const expectedResult: User[] = [];
        for (let i = 0; i < 10; i++) {
            expectedResult.push({
                id: faker.number.int(),
                name: faker.person.fullName(),
                // ensure generated users are older than 30 for this test
                age: faker.number.int({ min: 31, max: 100 })
            });
        }

        // spy console.log so we can assert the message is logged when selectAll runs
        const spy = sinon.spy(console, 'log');

        // `stubConstructor(DbService)` already created stubbed methods on `mockedDbConnection`.
        // Make the stub call console.log (so spy captures it) and then return the expected result.
        mockedDbConnection.selectAll.callsFake(async () => {
            console.log('selecting all...');
            await setTimeout(() => {console.log('selected all');}, 10); // simulate some async delay
            return expectedResult;
        });

        const users = await userService.findOlder(30);
        // all returned users must be older than 30
        expect(users.every(user => user.age ? user.age > 30 : false)).to.be.true;
        expect(spy.calledWith('selecting all...')).to.be.true;
    });

    it('test spy', async () => {
        const dbService = new DbService();
        const spy = sinon.spy(dbService, 'update');
        const testUserService = new UserService(dbService);

        await testUserService.update(1, { id: 1, name: 'John', age: 30 });
        expect(spy.called).to.be.true;
        expect(spy.calledWith(1, { id: 1, name: 'John', age: 30 })).to.be.true;
    });
});
