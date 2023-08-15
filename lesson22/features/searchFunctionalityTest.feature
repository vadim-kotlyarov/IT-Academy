Feature: Verify search functionality

  Scenario: Verify search result for a query

    Given I navigate on https://webdriver.io/ page
    When I click "Header > searchButton"
    And I fill field "SearchModal > searchModalInput" with text "browser"
    And I wait for search results in "SearchModal > searchHitContainer"
    Then I expect "ApiPage > pageTitle" element should contain text "Browser"