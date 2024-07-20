import AbstractPage from '../AbstractPage'

class CookiesBanner extends AbstractPage {
  // Selectors and variables
  private get cookiesBannerTitle() {
    return $('//h2[@id="CybotCookiebotDialogBodyContentTitle"]')
  }

  private get acceptNecessaryCookiesButton() {
    return $('//a[@id="CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"]')
  }
  
  // Functions
  public async acceptNecessaryCookies() {
    if (await expect(this.cookiesBannerTitle).toExist) {
      await this.waitAndClick(await this.acceptNecessaryCookiesButton)
    }
  }
}

export default new CookiesBanner()