Feature: Login
Background: Navigated to the swaglabs site
  Given the user is on the swaglabs login page

  Scenario: User successfully logs in to the webstore
    When the user logs in with a 'standard' account
    Then the user is on the Product page

  Scenario: User attempts to log in with a locked account
    When the user logs in with a 'locked' account
    Then an error banner displays the text "Epic sadface: Sorry, this user has been locked out."

  Scenario: User attempts to log in with a wrong password
    When the user enters 'wrong_username' as a username
    And the user enters 'wrong password' as a password
    And the user clicks the login button
    Then an error banner displays the text "Epic sadface: Username and password do not match any user in this service"
