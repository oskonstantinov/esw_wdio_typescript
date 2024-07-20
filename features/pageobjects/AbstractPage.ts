import '@wdio/globals'

export default class AbstractPage {
  /**
  * Navigate to the web page
  * @param {string} url
  */
  public async visitPage(url: string) {
    await browser.url(url)
  }

  /**
  * Wait for element be clickable before click to avoid flaky behaviour
  * @param {WebdriverIO.Element} element WebElement to be clicked on
  */
  public async waitAndClick(element: WebdriverIO.Element) {
    await element.waitForClickable()
    await element.click()
  }

  /**
  * Wait for element be visible before set value to avoid flaky behaviour
  * @param {WebdriverIO.Element} element WebElement to be filled
  */
  public async waitAndFillText(element: WebdriverIO.Element, text: string) {
    await element.waitForDisplayed()
    await element.setValue(text)
  }

  /**
  * Wait for element be visible before select option from the dropdown to avoid flaky behaviour
  * @param {WebdriverIO.Element} element Dropdown element (select type) to be selected
  */
  public async waitAndSelectFromDropdownByText(element: WebdriverIO.Element, text: string) {
    await element.waitForDisplayed()
    await element.selectByVisibleText(text)
  }
}
