const puppeteer=require('puppeteer')
const readline= require('readline-sync')
const fs= require('fs/promises')
const admin={
    username:'yogesh.sahani@kotakeducationfoundation.org',
    password:'india@123'
}

const delay = (milliseconds)=> new Promise((resolve)=>setTimeout(resolve,milliseconds))

async function start(){
    const browser = await puppeteer.launch({
        headless:false
    })
    const page= await browser.newPage()
    await page.goto('https://sms.buddy4study.com/login')
    await page.type('#username',admin.username)
    await page.type('#password',admin.password)
    await page.click('#__next > section.chakra-stack.login_loginTheme__1Ujbk.css-3waq5q > article > article.css-1j99di2 > form > article.css-ukeh4l > article > article')
    await page.waitForSelector('#__next > section.chakra-stack.login_loginTheme__1Ujbk.css-3waq5q > article > article.css-1j99di2 > form > article.css-ukeh4l > button')

    // await page.waitForNavigation();
    await page.click('#__next > section.chakra-stack.login_loginTheme__1Ujbk.css-3waq5q > article > article.css-1j99di2 > form > article.css-ukeh4l > button')
    await page.waitForSelector('#__next > article > article > article.css-9jtr4b > button')
    await page.waitForSelector('#__next > article > article > div > div > div:nth-child(1) > input[type=tel]')
    
   //OTP  
    let n1=readline.question('n1?')
    let n2=readline.question('n2?')
    let n3=readline.question('n3?')
    let n4=readline.question('n4?')
    let n5=readline.question('n5?')
    let n6=readline.question('n6?')
    console.log(n1)
    console.log(n2)
    console.log(n3)
    console.log(n4)
    console.log(n5)
    console.log(n6)

    await page.type(`#__next > article > article > div > div > div:nth-child(1) > input[type=tel]`,n1)
    await page.type(`#__next > article > article > div > div > div:nth-child(2) > input[type=tel]`,n2)
    await page.type(`#__next > article > article > div > div > div:nth-child(3) > input[type=tel]`,n3)
    await page.type(`#__next > article > article > div > div > div:nth-child(4) > input[type=tel]`,n4)
    await page.type(`#__next > article > article > div > div > div:nth-child(5) > input[type=tel]`,n5)
    await page.type(`#__next > article > article > div > div > div:nth-child(6) > input[type=tel]`,n6)

    await page.waitForSelector('#__next > article > article > article.css-9jtr4b > button')
    await page.click('#__next > article > article > article.css-9jtr4b > button')
    await page.waitForNavigation()

    //clicking KEF button
    await delay (5000)
    await page.waitForSelector('#__next > section.chakra-stack.organization_organizationTheme___L8vU.css-3waq5q > article > article.css-1j99di2 > form > div > article > article > article > label > dd')
    await page.click('#__next > section.chakra-stack.organization_organizationTheme___L8vU.css-3waq5q > article > article.css-1j99di2 > form > div > article > article > article > label > dd')
    //clickin on next
    await page.waitForSelector('#__next > section.chakra-stack.organization_organizationTheme___L8vU.css-3waq5q > article > article.css-1j99di2 > form > article > button')
    await page.click('#__next > section.chakra-stack.organization_organizationTheme___L8vU.css-3waq5q > article > article.css-1j99di2 > form > article > button')
    await page.waitForNavigation()

    //click on kotak kanya scholarship
    await page.waitForSelector('#__next > section.chakra-stack.scholarship_scholarshipTheme__QFXT0.css-3waq5q > article > article.css-1j99di2 > form > div > article:nth-child(1) > article > article > label > dd')
    await page.click('#__next > section.chakra-stack.scholarship_scholarshipTheme__QFXT0.css-3waq5q > article > article.css-1j99di2 > form > div > article:nth-child(1) > article > article > label > dd')

    //clicking on next
    await page.waitForSelector('#__next > section.chakra-stack.scholarship_scholarshipTheme__QFXT0.css-3waq5q > article > article.css-1j99di2 > form > article > button.css-1lov9bj')
    await page.click('#__next > section.chakra-stack.scholarship_scholarshipTheme__QFXT0.css-3waq5q > article > article.css-1j99di2 > form > article > button.css-1lov9bj')
    await page.waitForNavigation()
     
    //clicking on about mentoring in dashboard
    await page.waitForSelector('#__next > main > aside > section > article.css-1ojkuze > span.css-7grhd4 > button')
    await page.click('#__next > main > aside > section > article.css-1ojkuze > span.css-7grhd4 > button')

    //getting all scholarship values

    await page.waitForSelector('#project-list')
    await page.click('#project-list')

    await delay(10000)
    //All scholarship names
    const scholarshipname= await page.evaluate(()=>{
       return  Array.from(document.querySelectorAll('#project-list > option')).map(x=>x.textContent)
    })
    await fs.writeFile('scholarshipname.txt',scholarshipname.join("\r\n"))
    //All scholarship values
    const scholarshipvalue=await page.evaluate(()=>{
        return Array.from(document.querySelectorAll('#project-list > option')).map(x=>x.getAttribute('value'))
    })

    console.log(scholarshipvalue)
    console.log(scholarshipname)

    //Selecting scolarship
    await page.select('#project-list',scholarshipvalue[2])

    //clicking on menu

    await page.waitForSelector('body > header > div > div > article.col-md-3.col-sm-12.paddingRight > label ')
    const menu= await page.$('body > header > div > div > article.col-md-3.col-sm-12.paddingRight > label')
    await page.evaluate(menu => menu.click(), menu)
    // await page.click('body > header > div > div > article.col-md-3.col-sm-12.paddingRight > label ')
    //body > header > div > div > article.col-md-3.col-sm-12.paddingRight > label
    await delay(5000)
    //selecting report
    await page.waitForSelector('body>header>div>div>article.col-md-3.col-sm-12.paddingRight>ul>li:nth-child(6)>a')
    //body > header > div > div > article.col-md-3.col-sm-12.paddingRight > ul > li:nth-child(6) > a
    //body > header > div > div > article.col-md-3.col-sm-12.paddingRight > ul > li:nth-child(5) > a
    //body > header > div > div > article.col-md-3.col-sm-12.paddingRight > ul > li:nth-child(6)
    //body > header > div > div > article.col-md-3.col-sm-12.paddingRight > ul > li:nth-child(6) > a
    //body > header > div > div > article.col-md-3.col-sm-12.paddingRight > ul > li:nth-child(6) > a
    //await page.click('Reports','body>header>div>div>article.col-md-3.col-sm-12.paddingRight>ul>li:nth-child(6)')

    const report= await page.$('body>header>div>div>article.col-md-3.col-sm-12.paddingRight>ul>li:nth-child(6)>a')
    await page.evaluate(report => report.click(), report)
    await page.waitForNavigation()

    await page.waitForSelector('#searchForm > div:nth-child(3) > div:nth-child(1) > input')
    await page.focus('#searchForm > div:nth-child(3) > div:nth-child(1) > input')
    await page.keyboard.type('22102022')
    await page.focus('#searchForm > div:nth-child(3) > div:nth-child(2) > input')
    await page.keyboard.type('24122022')
    await delay(5000)
    await page.waitForSelector('#searchForm > div:nth-child(5) > div > a')
    await page.click('#searchForm > div:nth-child(5) > div > a')
    //await page.goto(response)
    // await page.waitForRequest(request => request.url()=='https://api.buddy4study.com/api/v1.0/uaa/oauth/token')
    // await page.setRequestInterception(true)
    await page.screenshot({path:'login.jpeg'})

    //#project-list > option

   // await browser.close()
}


start()
