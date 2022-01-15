const {Builder, Capabilities, By, until} = require('selenium-webdriver')
 
const chromedriver = require('chromedriver')
 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
 
beforeAll(async () => {
   await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
})

describe ("Employee Manager Tests", () => {

it("Can add new employee", async() =>{

   let addEmployeeBox = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/ul/li[11]"))

   await addEmployeeBox.click()

   let addNewEmployee = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/ul/li[11]"))
   
   await addNewEmployee.click()

   let newEmployeeName = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div[1]/div/input[1]"))


   await newEmployeeName.sendKeys(" Michael Fender")

   let newEmployeePhone = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div[1]/div/input[2]"))

   await newEmployeePhone.sendKeys("")

   let newEmployeeTitle = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div[1]/div/input[3]"))

   await newEmployeeTitle.sendKeys(" DiscordDaddy")

   let clickSave = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div[1]/div/button[1]"))

   await clickSave.click()

   // let newEmployeeConfirm = await driver.findElement(By.css)
})
})

// afterAll(async () => {
//    await driver.quit()
// })
