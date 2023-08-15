@only
Feature: Verify third party site redirection

  Scenario: Verify github redirection from the header icon

    Given I navigate on https://webdriver.io/ page
    When I click "Header > gitHubButton"
    And I switch tab to https://github.com/webdriverio/webdriverio
    Then I expect url should contain text "github"