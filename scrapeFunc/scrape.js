const puppeteer = require("puppeteer");
const data = {
    list: []
};


async function main (skill) {
    //launches chromium
    const browser = await puppeteer.launch({ headless: false });
    //opens new page/tab
    const page = browser.newPage();
    //https://ng.indeed.com/jobs?q=backend+developer&l=Nigeria
    await page.goto(``)
    //closes browser
    browser.close();
    
};



module.exports = main;