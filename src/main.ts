import { selectorVisible } from './selectors';

const puppeteer = require('puppeteer');

async function start(): Promise<void> {
	const browser = await puppeteer.launch({
		executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
		headless: false,
		defaultViewport: null
	});
	const page = await browser.newPage();
	await page.goto('https://web.whatsapp.com/');

	setTimeout(async () => {
		selectorVisible(page, browser, '[class="_1lPgH"]', '[class="_23LrM"]');
	}, 20000);
}

start();
