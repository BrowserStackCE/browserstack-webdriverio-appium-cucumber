Feature: Text Verification

  Scenario: Verify input text matches displayed output - BrowserStack Email
    Given I launch the app
    When I click the "Text Button"
    And I enter "hello@browserstack.com" into the input field
    Then I should see "hello@browserstack.com" as the output text

  Scenario: Verify input text matches displayed output - Test Email
    Given I launch the app
    When I click the "Text Button"
    And I enter "test@browserstack.com" into the input field
    Then I should see "test@browserstack.com" as the output text
