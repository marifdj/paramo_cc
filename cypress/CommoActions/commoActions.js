class CommonActions {
    constructor() {
    }

    //click
    click(selector){
        cy.get(selector).click()
    }

    //Implicit wait
    wait(timeInMiliSeconds){
        cy.wait(timeInMiliSeconds)
    }

    //get input selector and type text
    typeText(selector, text){
    cy.get(selector)
    .type(text).should('have.value', text)
    }

    //select first result of a dropdown
    selectFirstResult(selector){
        cy
        .get(selector)
        .first()
        .click()
        this.wait(2000)
    }

    //validate text
    validateTextContent(selector, text){
    // assert the element's text content is exactly the given text
        cy.get(selector).should('have.text', text)
    }

  //check if element is visible
    checkVisible(selector){
    // retry until the button with id "form-submit" is visible
        cy.get(selector).should('be.visible')
    }
}

export default CommonActions;