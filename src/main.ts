import { loginIsTrue, messageIsTrue } from './validate';
import { env } from '../utils/env';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const puppeteer = require('puppeteer');

export async function start(): Promise<void> {
	const browser = await puppeteer.launch({
		executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
		headless: false,
		defaultViewport: null,
		args: ['--disable-dev-shm-usage', '--no-sandbox', '--start-maximized']
	});
	const page = await browser.newPage();
	await page.setViewport({ 
		width: 1920,
		height: 941
	});
	await page.goto(env.url);
	
	setInterval(() => {
		loginIsTrue(page, browser, '[class="_1lPgH"]');
		messageIsTrue(page, browser, '[class="_2nY6U _3C4Vf"]');
	}, 18000);
}

start();
