package stepdefinitions;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {
	
	public static WebDriver driver;
	@Before
	public void init()
	{
		System.setProperty("webdriver.chrome.driver","E:/chromedriver.exe");
		driver=new ChromeDriver();
	}
	@Given("^I open the URL$")
	public void i_open_the_URL() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://www.calculator.net/");
	    
	}

	@Given("^I validate the title$")
	public void i_validate_the_title() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.getTitle().contains("calculator");
	}

	@When("^I click on BMI calculator$")
	public void i_click_on_BMI_calculator() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//a[text()='BMI Calculator']")).click();
	 
	}

	@Then("^I validate the title again$")
	public void i_validate_the_title_again() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.getTitle().contains("bmi-calculator");
	  
	}

	@Then("^I enter (\\d+) (\\d+) and (\\d+)$")
	public void i_enter_and(Integer age, Integer height, Integer weight) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("cage")).clear();
		driver.findElement(By.id("cage")).sendKeys(age.toString());
		driver.findElement(By.id("cheightmeter")).clear();
		driver.findElement(By.id("cheightmeter")).sendKeys(height.toString());
		driver.findElement(By.id("ckg")).clear();
		driver.findElement(By.id("ckg")).sendKeys(weight.toString());
	 
	}

	@Then("^click on calculate BMI$")
	public void click_on_calculate_BMI() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@value='Calculate']")).click();
	   
	}

	@Then("^I capture the BMI calculated$")
	public void i_capture_the_BMI_calculated() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.tagName("b")).getText();
		System.out.println(driver.findElement(By.tagName("b")).getText().toString());
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//driver.close();
	   
	}  
	}

	




