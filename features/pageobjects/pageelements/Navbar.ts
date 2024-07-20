import AbstractPage from '../AbstractPage'

class Navbar extends AbstractPage {
  // Selectors and variables
  private get company() {
    return $('(//a[text()="Company"])[1]')
  }

  private get careers() {
    return $('(//a[text()="Company"]/following::a[contains(@href, "careers")])[1]')
  }
  
  // Functions
  public async goToCareers() {
    await this.waitAndClick(await this.company)
    await this.waitAndClick(await this.careers)
    await expect(browser).toHaveUrl(expect.stringContaining('careers/'))
  }
}

export default new Navbar()