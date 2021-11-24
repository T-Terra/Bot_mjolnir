import { loginIsTrue, messageIsTrue } from './validate';
import { env } from '../utils/env';
import { sleep } from '../utils/actions';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const puppeteer = require('puppeteer');

export async function start(typeBot: number) {
	if (env.ci) {
		const browser = await puppeteer.launch({
			executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
			headless: true,
			args: ['--disable-dev-shm-usage', '--no-sandbox']
		});
		const page = await browser.newPage();
		if (typeBot === 1) {
			await page.goto(env.url);
			setInterval(() => {
				loginIsTrue(page, browser, '[class="_1lPgH"]');
				messageIsTrue(page, browser, '[class="_2nY6U _3C4Vf"]');
			}, 18000);
		} else if (typeBot === 2) {
			await page.goto(env.urlFatec);
			console.log('ENTROU NO SITE');
			await sleep(3);
			await page.click('[class="feature-circle fa fa-clock-o"]');
		}
	} else {
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
		if (typeBot === 1) {
			await page.goto(env.url);
			setInterval(() => {
				loginIsTrue(page, browser, '[class="_1lPgH"]');
				messageIsTrue(page, browser, '[class="_2nY6U _3C4Vf"]');
			}, 18000);
		} else if (typeBot === 2) {
			await page.goto(env.urlFatec);
			await sleep(3);
			await page.click('[class="feature-circle fa fa-clock-o"]');
			
		}
	}
	
}
