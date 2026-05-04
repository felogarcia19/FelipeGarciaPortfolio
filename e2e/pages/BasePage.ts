import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  get nav(): Locator {
    return this.page.locator('nav').first();
  }
  get footer(): Locator {
    return this.page.getByText(/Proudly powered by WordPress/i);
  }
  text(value: string | RegExp): Locator {
    return this.page.getByText(value);
  }
  heading(name: string | RegExp): Locator {
    return this.page.getByRole('heading', { name });
  }

  async goto(path: string = '/') {
    await this.page.goto(path);
  }
}
