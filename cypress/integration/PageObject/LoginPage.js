import CommonActions from "../../CommoActions/commoActions";

class LoginPage
{   
    constructor(){
      this.commonActions = new CommonActions()
      this.gotItButton = '//*[@id="welcome_modal"]/div/div/button'
      this.closeButton = '#welcome_modal'
      this.popUp = '#welcome_modal'
      this.bodyUI = '.theme-dark landscape'
      this.passwordInput = '#core__protected_modules_user_yiiForm_RegistrationForm_password'
      this.passwordInputII = '#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation'
      this.phone = '//li[contains(text(),"Phone")]'
      this.emailInput = '//*[@id="core__protected_modules_user_yiiForm_RegistrationForm_email"]'
      this.emailButton = '//li[contains(text(),"E-mail")]'
      this.phoneInput = '#core__protected_modules_user_yiiForm_RegistrationForm_phone'
      this.homePagelogin = 'body'
      this.congratsMssg = '//h1[contains(text(),"Congratulations!")]'
      this.noBonus = '//*[@id="bonus-list"]/div[2]/label/span'
      this.checkbox = 'div.helper:nth-child(1) main.main div.page.page-user-form div.container div.page-user-form__wrapper div.form__wrapper form.form.form--registration fieldset.form__section.form__section--registration:nth-child(4) div.form__input.form__input--checkbox.checkbox:nth-child(1) div.input__wrapper > label:nth-child(3)'
      this.createAccountButton = '//span[contains(text(),"Create account")]'
      this.signInButton = '/html/body/div[1]/header/div/div/div[2]/div/div[1]' 
      this.signInButtonII= '/html/body/div[1]/header/div/div/div[2]/div/div[2]/a'
      this.signInEmail= '//*[@id="UserLogin_username"]' 
      this.signInPassword='//*[@id="UserLogin_password"]' 
      this.signInCheckbox= '//*[@id="login-form"]/fieldset[1]/div[4]/div/div/label'
      this.signInFinalButton = '//*[@id="login-form"]/fieldset[2]/button'

      this.popUpErrorMssg= 'The werlcome popUp didnt show up'
    }

    validateWelcomePopup(){
        if(this.commonActions.checkVisible(this.popUp)){ 
            this.commonActions.checkVisible(this.gotItButton)
            this.commonActions.checkVisible(this.closeButton)
            this.commonActions.click(this.gotItButton)
        }else{
            console.log(this.popUpErrorMssg)
        }
    }
    validateHomePage(){
        this.commonActions.checkVisible(this.bodyUI)
    }
    registrationForm(userEmail, userPassword, phoneNumber){
        this.checkRegistrationElements()
        this.commonActions.typeText(this.emailInput,userEmail)
        this.commonActions.typeText(this.userPassword,userPassword)
        this.commonActions.typeText(this.userPasswordII,userPassword)
        
        if(this.commonActions.checkVisible(this.phoneInput)){
            this.commonActions.click(this.phone)
            this.commonActions.typeText(this.phoneInput,phoneNumber)
        }
        this.commonActions.click(this.emailButton)
        this.commonActions.click(this.checkbox)
        this.commonActions.click(this.noBonus)
        this.commonActions.click(this.createAccountButton)
        this.checkSuccessLogin()
    
    }

    checkRegistrationElements(){
        this.commonActions.checkVisible(this.emailInput)
        this.commonActions.checkVisible(this.passwordInput)
        this.commonActions.checkVisible(this.passwordInputII)
        this.commonActions.checkVisible(this.createAccountButton)
        this.commonActions.checkVisible(this.checkbox)
        
    }
    checkSuccessLogin(){
    //verify the success registration 
    this.commonActions.checkVisible(this.homePagelogin)
    this.commonActions.checkVisible(this.congratsMssg)
    }

    signIn(userEmail, userPassword){
        //click sign in
        this.commonActions.click(this.signInButton)
        this.commonActions.click(this.signInButtonII)
        this.commonActions.typeText(this.signInEmail,userEmail)
        this.commonActions.typeText(this.signInPassword,userPassword)
        this.commonActions.click(this.signInCheckbox)
        this.commonActions.click(this.signInFinalButton)
        //verify sign in 
        this.commonActions.checkVisible(this.homePagelogin)

    }
}
export default LoginPage;