package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;

public class Main {
    public static void main(String[] args) {
       method_1();
       method_2();


    }

    public static  void method_1(){
        System.out.println("Using selenium web drive with Oops concepts.... ");
//        Default name and password.........
        String name="Shaik Abubakar";
        String password="SidhiqAbu@143";
//        Calling Login_Page method .....
        LoginPage loginPage = Login_Page(name,password);
//        Calling homePageTask method to Start automation Script.....
        homePageTask(loginPage,name,password);



    };
    public static LoginPage Login_Page(String name,String password){
        // Creation of object of LoginPage.....
        LoginPage login = new LoginPage();
        // Setting up default user name......
        login.setUser_name(name);
        // Setting up default password........
        login.setPass_word(password);
        return login;
    };

    public static void homePageTask(LoginPage loginPage,String name,String password){
//   Creation of HomePage object.........
        HomePage homePage = new HomePage();
//   Setting up the login page url ........
        homePage.setUrl("https://sakshingp.github.io/assignment/login.html");
//   Redirecting to login page using loadingUrl() method.......
        homePage.loadingUrl();
//   Maximize to login Page ....
        homePage.maxScreen();
//   Finding username Web element and setting input username.........
        WebElement user_nameElm = homePage.findById("username");
        homePage.setKey(name,user_nameElm);
//   Finding password Web element and setting up the default password.....
        WebElement passwordElm = homePage.findById("password");
        homePage.setKey(password,passwordElm);
//   Getting the Information of Username and password which are entered.....
        String nameText=user_nameElm.getText();
        String passwordText=passwordElm.getText();
//   Check Username and password are matching or not............
        loginPage.checkDetails(nameText,passwordText);
//   Finding web element of login button and performing click operation on it.........
        WebElement loginBtn = homePage.findById("log-in");
        homePage.clickEvent(loginBtn);
//   Scroll down till the bottom of the page
        JavascriptExecutor js = (JavascriptExecutor) homePage.driver;
        js.executeScript("window.scrollBy(0,document.body.scrollHeight)");
//  getting web element of  table Amount .....
        WebElement elm = homePage.findById("amount");
//  performing click event on Amount Web element...........
        homePage.clickEvent(elm);
        homePage.close();
    };


//    Method-2 using without oops concepts.........................
    public static void method_2(){
        System.out.println("Using selenium web drive with out Oops concepts.... ");
        WebDriver driver = new ChromeDriver();
        driver.get("https://sakshingp.github.io/assignment/login.html");
        driver.manage().window().maximize();
        driver.findElement(By.id("username")).sendKeys("Shaik Abubakar");
        driver.findElement(By.id("password")).sendKeys("SidhiqAbu@143");
        WebElement loginBtn = driver.findElement(By.id("log-in"));
        loginBtn.click();
        WebElement amountBtn = driver.findElement(By.id("amount"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,document.body.scrollHeight)");
        amountBtn.click();
        driver.close();
    };
}