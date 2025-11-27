import { test } from '../src/fixtures/atlassian.fixture';
import { AtlassianLoginPage } from '../src/pages/atlassian-login.page';

test.describe('Atlassian login', () => {
    let loginPage: AtlassianLoginPage;

    test.beforeEach(async ({ page, configService }) => {
        loginPage = new AtlassianLoginPage(page, configService);
        await loginPage.goto();
    });

    test('login', async () => {
        await loginPage.login(test.info().workerIndex);

        await loginPage.expectPageTitle();
    });
});
