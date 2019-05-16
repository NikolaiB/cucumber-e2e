Feature: Calculate Budget

  I want to calculate my budget

  Scenario: List QA Engineer in he job positions page
    Given I visit Springboard Retail website
    When I navigate to careers page
    Then a QA Engineer position should be listed
