Feature: User registration

   Registration
    Scenario Outline: Registration of the user 
        Given open casino url
        Then validate welcome popup
        When the home page is displayed
        Then the user do the registration <userEmail> <password> <phoneNumber>
  
    
    Examples:
       |      userEmail                   | password  | phoneNumber |
       |  kdmitriy7@vspiderf.com          | Test1234! | 245190875   |



   Sign in
    Scenario Outline: sign in user
        Given open casino url
        Then go to sign in and login <userEmail> <password>
  
    Examples:
       |      userEmail                   | password  |
       |  kdmitriy7@vspiderf.com          | Test1234! |   

    