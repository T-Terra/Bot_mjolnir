export async function sendMessage(page, browser, inputMessage: string, buttonSend: string) {
	await page.type(inputMessage, 'Bot: Oi minha vida!');
	await page.click(buttonSend);
}

async function reloadPage(page) {
	setTimeout(async () => {
		await page.reload();
	}, 5000);
}

export async function reloadPage2(page) {
	setTimeout(async () => {
		await page.reload();
	}, 5000);
}

export async function reloadPage3(page) {
	setTimeout(async () => {
		await page.reload();
	}, 5000);
}

export async function reloadPage4(page) {
	setTimeout(async () => {
		await page.reload();
	}, 5000);
}

export async function reloadPage5(page) {
	setTimeout(async () => {
		await page.reload();
	}, 5000);
}

export { reloadPage };