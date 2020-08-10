
Feature: Login feature
 I want to calculate BMI 

  @regression
  Scenario Outline: claculating BMI
  Given I open the URL
  And I validate the title
  When I click on BMI calculator
  Then I validate the title again
  And I enter <age> <height> and <weight>
  And click on calculate BMI
  Then I capture the BMI calculated
  And close the browser
  
  Examples:
  |age|height|weight|
  |10|127|40|
	|30|156|70|
	|25|152|55|
	|20|160|45|
	|35|160|70|
  
  
  
