Feature: Displaying pullup bars

  Background:
    There is a pullup bar at "330 W 22nd Street, Norfolk VA 23517"
    There is a pullup bar at "1103 Chancellor Walk Court, Virginia Beach VA 23454"
    There is a pullup bar at "150 W Brambleton, Norfolk VA 23510"

  Scenario: Viewing the home page and providing your location
    When I am on the home page
    And I am at "350 W 22nd Street, Norfolk VA 23517"
    Then I should see a Google map with 3 pins
  
  Scenario: Viewing the home page and not providing your location