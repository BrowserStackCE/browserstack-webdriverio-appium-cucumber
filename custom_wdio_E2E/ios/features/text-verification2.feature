Feature: Text Verification - Return

  Scenario: Verify input text matches displayed output - BrowserStack Email
    Given I launch the app
    When I click the "Text Button"
    And I enter "Hello" into the input field
    Then I should see "Hello" as the output text

  Scenario: Verify input text matches displayed output - Test Email
    Given I launch the app
    When I click the "Text Button"
    And I enter "This Works" into the input field
    Then I should see "This Works" as the output text
