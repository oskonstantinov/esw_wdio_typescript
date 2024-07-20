import AbstractPage from './AbstractPage'

class OpenPositionsPage extends AbstractPage {
  // Selectors and variables
  private get selectLocation() {
    return $('//select[@id="locselect"]')
  }

  private get selectDepartment() {
    return $('//select[contains(@class, "depart")]')
  }

  private get firstPositionReadMore() {
    return $('//div[contains(@class, "positions__position") and not(contains(@class,"d-none"))]//a)[1]')
  }

  private get positionTitle() {
    return $('//h1[@class="app-title"]')
  }

  private get positionContent() {
    return $('//*[@id="content"]')
  }

  private get applicationForm() {
    return $('//*[@id="application"]')
  }

  // Functions
  public async filterPositionsByLocationAndDepartment(location: string, department: string) {
    await this.waitAndSelectFromDropdownByText(await this.selectLocation, location)
    await this.waitAndSelectFromDropdownByText(await this.selectDepartment, department)
  }

  public async assertFirstPositionInLocation(region: string) {
    const selector: string = `(//div[contains(@class, 'positions__position') and not(contains(@class,'d-none'))]//p[text()='${region}'])[1]`
    await expect($(selector)).toBeDisplayed()
  }

  public async explorePositionAndAssertDetails() {
    await this.waitAndClick(await this.firstPositionReadMore)
    await expect(browser).toHaveUrl(expect.stringContaining('?gh_jid='))
    await expect(this.positionTitle).toBeDisplayed()
    await expect(this.positionContent).toBeDisplayed()
    await expect(this.applicationForm).toBeDisplayed()
  }
}

export default new OpenPositionsPage()