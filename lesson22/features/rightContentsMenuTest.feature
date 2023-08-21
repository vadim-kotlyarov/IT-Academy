Feature: Verify right contents

  Scenario Outline: Verify right contents navigation

    Given I navigate on https://webdriver.io/ page
    When I click "Header > naviganionBar" "API" tab
    And I click "LeftMenu > leftMenuBar" "browser" tab
    And I click "RightContentsMenu > rightMenuBar" <tabName> tab
    Then I wait for "ApiPage > contentsTitle" with <contentName> to be displayed in viewport
    
    Examples:
      |tabName      |contentName |
      |'Properties' |'properties'|
      |'Methods'    |'methods'   |
      |'Remarks'    |'remarks'   |
      