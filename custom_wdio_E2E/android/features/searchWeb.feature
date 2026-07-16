Feature: Wikipedia Search Testing - Web Testing Tools

  Scenario: Search for Playwright
    Given I launch the search screen
    When I search with keyword "Playwright"
    Then The search results should be listed
    Then I clear the search field to prevent interaction with it
    Then I click on the ImageButton after every search

  Scenario: Search for Cypress
    Given I launch the search screen
    When I search with keyword "Cypress"
    Then The search results should be listed
    Then I clear the search field to prevent interaction with it
    Then I click on the ImageButton after every search
