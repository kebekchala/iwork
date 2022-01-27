const { Builder ,By, Key } = require('selenium-webdriver');


(async function iwork() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.iworkplc.com/contact");
    
    let mobile = await driver.findElement(By.xpath('//*[@id="comp-kktfmgn8"]/p/span')).getText();
    console.log("Mobile Number",mobile);
    let office = await driver.findElement(By.xpath('//*[@id="comp-ks7htvty"]/p/span')).getText();
    console.log("Office Number", office);

    let mobileNumber = mobile.slice(mobile.length - 4);
    let officeNumber = office.slice(mobile.length - 5);
    console.log(officeNumber," / ", mobileNumber);
    let result = officeNumber / mobileNumber;

    console.log("result => ", result);
})();
