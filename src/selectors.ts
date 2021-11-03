export async function selectorVisible(page, browser, selector_photo: string, selector_ismsg: string) {
	const photoLogin = await page.$(selector_photo);
	const isMsg = await page.$(selector_ismsg);
	// VERIFICA SE ESTÁ LOGADO
	if (photoLogin) {
		await page.waitForSelector(selector_photo, { visible: true });
		await page.evaluate(() => window.alert('VOCÊ ESTÁ LOGADO!!'));
	} else {
		await browser.close();
		throw ('Erro! não existe seletor ou seletor passado como argumento errado!');
	}

	// VERIFICA SE TEM MENSAGEM
	if (isMsg) {
		await page.evaluate(() => window.alert('VOCÊ TEM UMA NOVA MENSAGEM!!'));
		// await page.click('[class="_3OvU8"]');
	} else {
		await page.evaluate(() => window.alert('VOCÊ NÃO POSSUI NOVAS MENSAGENS!!'));
	}
}
