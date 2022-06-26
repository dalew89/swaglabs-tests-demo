Feature: Login
Background: Navigated to the swaglabs site
  Given the user is on the swaglabs website

  Scenario: User attempts to log in with a locked account
    When the user enters "locked_user" as a username
    And the user enters "standard_user" as a password
    And the user clicks the login button
    Then an error banner displays the text "Epic sadface: Sorry, this user has been locked out."

  Scenario: User attempts to log in with a wrong password
    When the user enters "standard_user" as a username
    And the user enters "incorrectpassword" as a password
    And the user clicks the login button
    Then an error banner displays the text "Epic sadface: Username and password do not match any user in this service"
      
  Scenario: User successfully logs in to the webstore
    When the user enters "standard_user" as a username
    And the user enters "secret_sauce" as a password
    And the user clicks the login button
    Then the user is on the Product page