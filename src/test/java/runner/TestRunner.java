package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/features/"
		,glue= {"stepdefinitions"},
		tags= {"@regression"},
		plugin= {"pretty","html:target/cucumber-pretty"}
		//plugin= {"pretty","shtml:target/site/cucumber-pretty","json:target/cucumber/cucumber.json"}
		)
public class TestRunner {

}
