export async function loginIsTrue(page, browser, selector_photo: string) {
	const photoLogin = await page.$(selector_photo);
	// VERIFICA SE ESTÁ LOGADO
	if (photoLogin) {
		await page.waitForSelector(selector_photo, { visible: true });
		return true;
	} else {
		await browser.close();
		throw ('Erro! não existe seletor ou seletor passado como argumento errado!');
	}
}
export async function messageIsTrue(page, browser, msgIsTrue: string, msgIsFalse: string) {
	//const isMsgTrue = await page.$(msgIsTrue);
	//const isMsgFalse = await page.$(msgIsFalse);

	// VERIFICA SE TEM MENSAGEM
	if (msgIsTrue) {
		setTimeout(async () => {
			await page.click(msgIsTrue);
		}, 2000);
	} else if (msgIsTrue === null && msgIsFalse) {
		await page.evaluate(() => window.alert('VOCÊ NÃO POSSUI NOVAS MENSAGENS!!'));
	}
}
