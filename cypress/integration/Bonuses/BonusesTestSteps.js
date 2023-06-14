import { Given,Then} from "cypress-cucumber-preprocessor/steps";
import BonusesPage from "../../../support/PageObject/BonusesPage"
import LoginPage from "../../../support/PageObject/LoginPage";

const loginPage = new LoginPage
const bonusesPage = new BonusesPage

Given('open casino url', () => {
    cy.visit(Cypress.env('url'))
})

Then( 'go to sign in and login {string}{string}',(userEmail, userPassword) => {
    loginPage.signIn(userEmail, userPassword)
  })

Then( 'validate Bonuses section',() => {
    bonusesPage.validateBonusesPage()
  })