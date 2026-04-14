import { test, expect } from '@playwright/test';
import { ContactPage } from '../src/pages/ContactPage';
import { TestConfig } from '../src/config/TestConfig';
import { UserDataBuilder } from '../src/utils/UserDataBuilder';

test.describe('Contact Form Integration Tests', () => {
    let contactPage: ContactPage;
    const config = TestConfig.getInstance();

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await page.goto(config.baseUrl);
    });

    test('TC01: Should submit form with valid data', async () => {
        const validUser = new UserDataBuilder().build();
        await contactPage.fillForm(validUser);
        await contactPage.submit();
        // Verification logic depends on the specific site's response GUI
    });

    test('TC02: Should show validation error for invalid email', async () => {
        const invalidUser = new UserDataBuilder().withEmail('not-an-email').build();
        await contactPage.fillForm(invalidUser);
        await contactPage.submit();
        await expect(contactPage.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    });

    test('TC03: Should allow customizing data via Builder', async () => {
        const customUser = new UserDataBuilder().withEmail('special@test.com').build();
        await contactPage.fillForm(customUser);
        expect(customUser.email).toBe('special@test.com');
    });
});