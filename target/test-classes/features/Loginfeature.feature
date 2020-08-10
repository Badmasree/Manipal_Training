
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
  |45|134|56|
  
  
