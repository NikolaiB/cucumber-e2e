Feature: Calculate Budget

  I want to calculate my budget

  Scenario: Calculate the Budget
    Given I open Budget page
    When I add an item to budget
    Then I should see total result when the item was added
    When I edit Paycheck item
    Then I should see total result when the item was edited
    When I delete Rent item
    Then I should see total result when the item was edited
    When I check validation
    Then I see submit button disabled


