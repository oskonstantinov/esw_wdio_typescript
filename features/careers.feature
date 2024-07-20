Feature: ESW home assignment - Careers

  @feature=careers
  Scenario: Check the open "Software" positions in Madrid

    Given I am on the home page
    And I have accepted the necessary cookies
    When I am navigating to Careers
    And I am going to "Open Positions"
    And I filter the positions by "Madrid" location and "Software" department
    Then I see at least 1 open position in "Madrid" location
    And I am able open position and see details
