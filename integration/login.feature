Feature: Login 

  Scenario: Logs in
     When I navigate to the QA page
      And I enter an email into the email field
      And I enter a password into the password field
      And I click the submit button
     Then I see I am on the organisation select page
