import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class NavigationPage extends BasePage {
  menuLink(name: string): Locator {
    return this.nav.getByRole('link', { name });
  }

  get homeLink(): Locator        { return this.menuLink('Home'); }
  get softwareLink(): Locator    { return this.menuLink('Software'); }
  get electronicsLink(): Locator { return this.menuLink('Electronics'); }
  get audioLink(): Locator       { return this.menuLink('Audio'); }
  get contactLink(): Locator     { return this.menuLink('Contact'); }
  get aboutLink(): Locator       { return this.menuLink('About'); }
}
