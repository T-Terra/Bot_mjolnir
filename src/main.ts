const puppeteer = require('puppeteer');
import { selectorVisible } from './selectors';

async function start() {
  const browser = await puppeteer.launch({ 
    headless: false, 
  });
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com/');

  setTimeout(async () => {
    selectorVisible(page, browser, '[class="_1lPgH"]');
  }, 10000);
};

start();
