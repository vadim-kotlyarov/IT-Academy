Feature: Testing top bar

  Scenario Outline: Verify top bar navigation

    Given I navigate on https://webdriver.io/ page
    When I click "Header > naviganionBar" <tabName> tab
    Then I expect <actualTitle> element should equal text <expectedTitle>
    
    Examples:
      |tabName      |actualTitle                 |expectedTitle                          |
      |'Docs'       |"DocsPage > pageTitle"      |'Getting Started'                      |
      |'API'        |"ApiPage > pageTitle"       |'Introduction'                         |
      |'Blog'       |"BlogPage > pageTitle"      |'TypeScript Support for WebDriver Bidi'|
      |'Contribute' |"ContributePage > pageTitle"|'Contribute'                           |
      |'Community'  |"CommunityPage > pageTitle" |'Need Help?'                           |
      |'Sponsor'    |"SponsorPage > pageTitle"   |'Become a WebdriverIO Sponsor'         |
