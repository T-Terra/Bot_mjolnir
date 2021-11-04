import { loginIsTrue, messageIsTrue } from './selectors';

// eslint-disable-next-line @typescript-eslint/no-var-requires
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
		messageIsTrue(page, browser, '[class="_2nY6U _3C4Vf"]', '[class="_2nY6U"]');
	}, 30000);
}

start();
