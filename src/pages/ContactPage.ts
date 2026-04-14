import { Page, Locator } from '@playwright/test';

export class ContactPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        this.submitButton = page.locator('#submit');
        this.successMessage = page.locator('.modal-title');
    }

    async fillForm(details: any) {
        await this.firstNameInput.fill(details.firstName);
        await this.lastNameInput.fill(details.lastName);
        await this.emailInput.fill(details.email);
    }

    async submit() {
        // Using force because some demo sites have overlays
        await this.submitButton.click({ force: true });
    }
}