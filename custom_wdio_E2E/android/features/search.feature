Feature: Wikipedia Search Testing

  Scenario: Search for BrowserStack
    Given I launch the search screen
    When I search with keyword "BrowserStack"
    Then The search results should be listed
    Then I clear the search field to prevent interaction with it
    Then I click on the ImageButton after every search

  Scenario: Search for WebdriverIO
    Given I launch the search screen
    When I search with keyword "WebdriverIO"
    Then The search results should be listed
    Then I clear the search field to prevent interaction with it
    Then I click on the ImageButton after every search
