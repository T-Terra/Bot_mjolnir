const puppeteer = require('puppeteer');

async function start() {
  const browser = await puppeteer.launch({ 
    headless: false, 
    product: 'firefox'
  });
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com/');
};

start();
