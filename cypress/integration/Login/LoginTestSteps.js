import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/PageObject/LoginPage";

const loginPage = new LoginPage


    Given('open casino url', () => {
        cy.visit(Cypress.env('url'))
    })
    
    Then( 'validate welcome popup', ()=> {
        loginPage.validateWelcomePopup()
    })

    When('the home page is displayed', ()=> {
       loginPage.validateHomePage()
    })
    
    Then( 'the user do the registration {string}{string}{string}',(userEmail, userPassword, phoneNumber) => {
        loginPage.registrationForm(userEmail, userPassword, phoneNumber)
      })
    
    Then( 'go to sign in and login {string}{string}',(userEmail, userPassword) => {
        loginPage.signIn(userEmail, userPassword)
      })
     