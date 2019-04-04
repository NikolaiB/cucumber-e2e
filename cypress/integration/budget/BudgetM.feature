Feature: Calculate Budget

  I want to calculate my budget

  Scenario: Calculate the Budget
    Given I open Budget page
    When I add an item to budget
    When I edit Paycheck item
    When I delete Rent item
    When I check validation
    Then I see submit button disabled


