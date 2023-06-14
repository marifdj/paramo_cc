Feature: Realizar asignaciones de compras y verificar funcionalidad

  Bonuses section validation
    Scenario Outline: check bonuses section
        Given open casino url
        Then go to sign in and login <userEmail> <password>
        Then validate Bonuses section
  
    Examples:
       |      userEmail                   | password  |
       |  kdmitriy7@vspiderf.com          | Test1234! |   

