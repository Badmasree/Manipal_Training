$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Loginfeature.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "I want to calculate BMI",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "claculating BMI",
  "description": "",
  "id": "login-feature;claculating-bmi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I validate the title",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on BMI calculator",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I validate the title again",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter \u003cage\u003e \u003cheight\u003e and \u003cweight\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I capture the BMI calculated",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-feature;claculating-bmi;",
  "rows": [
    {
      "cells": [
        "age",
        "height",
        "weight"
      ],
      "line": 17,
      "id": "login-feature;claculating-bmi;;1"
    },
    {
      "cells": [
        "45",
        "134",
        "56"
      ],
      "line": 18,
      "id": "login-feature;claculating-bmi;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6879392600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "claculating BMI",
  "description": "",
  "id": "login-feature;claculating-bmi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I open the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I validate the title",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on BMI calculator",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I validate the title again",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter 45 134 and 56",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on calculate BMI",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I capture the BMI calculated",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_URL()"
});
formatter.result({
  "duration": 3407574400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_validate_the_title()"
});
formatter.result({
  "duration": 35988700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_click_on_BMI_calculator()"
});
formatter.result({
  "duration": 2495156300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_validate_the_title_again()"
});
formatter.result({
  "duration": 15128400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 8
    },
    {
      "val": "134",
      "offset": 11
    },
    {
      "val": "56",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_enter_and(Integer,Integer,Integer)"
});
formatter.result({
  "duration": 1837763000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.click_on_calculate_BMI()"
});
formatter.result({
  "duration": 1327538700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_capture_the_BMI_calculated()"
});
formatter.result({
  "duration": 119848500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
});