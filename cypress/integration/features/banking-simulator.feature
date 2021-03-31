Feature: Banking Simulator 

  Scenario: User should be able to see their account info
    As a bank user
    I want to be able to view my bank account statement
    Because I want to know my account statement.

    Given I'm bank account holder
    When I view the home page
    Then I should see my banking account information