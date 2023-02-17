Feature: Demo Feature

    Scenario Outline: Run first feature
        Given Google page is opened
        When I search with <searchItem>
        Then Click on search term
        Then the URL should match <ExpectedURL>
        Examples:
            | testID    | searchItem | ExpectedURL           |
            | DEMOTC_01 | wdio       | https://webdriver.io/ |
