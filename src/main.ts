import { loginIsTrue, messageIsTrue } from './selectors';

const puppeteer = require('puppeteer');

async function start(): Promise<void> {
	const browser = await puppeteer.launch({
		executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
		headless: false,
		defaultViewport: null
	});
	const page = await browser.newPage();
	await page.goto('https://web.whatsapp.com/');

	

	setInterval(() => {
		loginIsTrue(page, browser, '[class="_1lPgH"]');
		messageIsTrue(page, browser, '[class="_23LrM"]', '[class="_3OvU8"]');
	}, 30000);
}

start();
