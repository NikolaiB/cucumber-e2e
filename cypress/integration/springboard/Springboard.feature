Feature: Check QA job

  I want to see if QA engineer position is available

  Scenario: List QA Engineer in the job positions page
    Given I visit Springboard Retail website
    When I navigate to careers page
    Then a QA Engineer position should be listed
