import { defineStep } from '@wdio/cucumber-framework'
import HomePage from '../pageobjects/HomePage'
import CookiesBanner from '../pageobjects/pageelements/CookiesBanner'
import Navbar from '../pageobjects/pageelements/Navbar'
import CareersPage from '../pageobjects/CareersPage'
import OpenPositionsPage from '../pageobjects/OpenPositionsPage'

defineStep(/^I am on the home page$/, async () => {
  await HomePage.visitPage(HomePage.homePageUrl)
})

defineStep(/^I have accepted the necessary cookies$/, async () => {
  await CookiesBanner.acceptNecessaryCookies()
})

defineStep(/^I am navigating to Careers$/, async () => {
  await Navbar.goToCareers()
})

defineStep(/^I am going to "Open Positions"$/, async () => {
  await CareersPage.goToOpenPositions()
})

defineStep(/^I filter the positions by "([^"]*)" location and "([^"]*)" department$/, async (location, department) => {
  await OpenPositionsPage.filterPositionsByLocationAndDepartment(location, department)
})

defineStep(/^I see at least 1 open position in "([^"]*)" location$/, async (location) => {
  await OpenPositionsPage.assertFirstPositionInLocation(location)
})

defineStep(/^I am able open position and see details$/, async () => {
  await OpenPositionsPage.explorePositionAndAssertDetails
})