export async function sendMessage(page, browser, inputMessage: string, buttonSend: string) {
	await page.type(inputMessage, 'Bot: Oi minha vida!');
	await page.click(buttonSend);
}

async function reloadPage(page) {
	setTimeout(async () => {
		await page.reload();
	}, 5000);
}

export { reloadPage };