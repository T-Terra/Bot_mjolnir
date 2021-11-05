import { start } from './main';

export async function sendMessage(page, browser, inputMessage: string, buttonSend: string) {
	await page.type(inputMessage, 'Bot: Oi minha vida!', {delay: 200});
	await page.click(buttonSend);
}

export async function closePage(page, browser) {
	await browser.close();
	start();
}