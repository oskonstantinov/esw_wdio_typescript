import AbstractPage from './AbstractPage'

class CareersPage extends AbstractPage {
  // Selectors and variables
  private get openPositions() {
    return $('(//a[contains(@href, "open-positions")])[1]')
  }

  // Functions
  public async goToOpenPositions() {
    await this.waitAndClick(await this.openPositions)
    await expect(browser).toHaveUrl(expect.stringContaining('open-positions/'))
  }
}

export default new CareersPage()