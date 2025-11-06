import { BrowserContextOptions, chromium } from 'playwright';
import * as fs from 'fs';

exports.mochaGlobalSetup = async function () {
    let _token = '';

    if (fs.existsSync('token.txt')) {
        _token = fs.readFileSync('token.txt', 'utf8');
    }

    if (!_token) {
        const browser = await chromium.launch({ headless: false });

        const browserOptions: BrowserContextOptions = {};
        const storageStatePath = 'storage-state.json';
        if (fs.existsSync(storageStatePath)) {
            browserOptions.storageState = storageStatePath;
        }
        const browserContext = await browser.newContext(browserOptions);

        const page = await browserContext.newPage();

        const tokenResponse = page.waitForRequest((request) => request.url().includes('https://lms.academius.io/api/graphql'));

        await page.goto('https://lms.robotdreams.cc/login', { waitUntil: 'domcontentloaded' });

        const loginButton = page.locator('button[type="submit"]');
        const emailInput = page.locator('#email');
        const loginStateLogo = page.locator('div._menu_k1xde_33:nth-child(2)');
        const waitPageToLoadLocator = page.locator('//div[@class="_menu_k1xde_33"] | //*[@id="email"]');
        await waitPageToLoadLocator.waitFor({ state: 'visible', timeout: 3000 });
        if (!loginStateLogo) {
            await emailInput.waitFor({ state: 'visible', timeout: 3000 });
            if (await emailInput.isVisible()) {
                await emailInput.fill(process.env.RD_USER_NAME as string);
                await page.locator('#password').fill(process.env.RD_PASSWORD as string);
                await loginButton.click();
            }
        }

        const request = await tokenResponse;

        const headers = request.headers();
        const token = headers['authorization'].replace('Bearer ', '');

        await page.context().storageState({ path: storageStatePath });

        _token = token;

        await page.close();
        await browserContext.close();
        await browser.close();

        fs.writeFileSync('token.txt', token);
    }

    globalThis.token = _token;

    return _token;
};
