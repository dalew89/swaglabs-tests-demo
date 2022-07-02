Feature: Product pages
§
Background: 
  Given the user is on the swaglabs login page
  And the user logs in with a "standard" account

Scenario Outline: Item information
  Then the description of the <item> is <description>
  And the price of the <item> is <price>


  Examples:
    | item                | description                                                                                                                            | price  |
    | "Sauce Labs Backpack" | "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection." | "$29.99" | 