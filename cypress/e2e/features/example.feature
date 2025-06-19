Feature: Google Search
  Scenario: Visit Google and check title
    Given I open Google page
    Then the title should include "Google" 