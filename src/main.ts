const puppeteer = require('puppeteer');
import selectorVisible from './selectors';

async function start(): Promise<void> {
  const browser = await puppeteer.launch({ 
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: false,
    defaultViewport: {
      width: 1980,
      height: 1080,
      deviceScaleFactor: 1,
    },
  });
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com/');

  setTimeout(async () => {
    selectorVisible(page, browser, '[class="_1lPgH"]', '[class="_23LrM"]');
  }, 20000);
};

start();
