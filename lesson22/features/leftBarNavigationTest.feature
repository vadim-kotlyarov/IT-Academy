Feature: Testing left bar

  Scenario Outline: Verify left bar navigation

    Given I navigate on https://webdriver.io/ page
    When I click "Header > naviganionBar" "API" tab
    And I click "LeftMenu > leftMenuBar" <tabName> tab
    Then I expect "ApiPage > pageTitle" element should equal text <expectedTitle>
    
    Examples:
      |tabName                    |expectedTitle          |
      |'Protocols'                |"Protocol Commands"    |
      |'browser'                  |"The Browser Object"   |
      |'element'                  |"The Element Object"   |
      |'Expect'                   |"Expect"               |
      |'Globals'                  |"Globals"              |
      |'Environment Variables'    |"Environment Variables"|
      |'Modules'                  |"Modules"              |