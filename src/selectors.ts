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

export async function messageIsTrue(page, browser, selector_ismsg: string, selector_father: string) {
	const isMsg = await page.$(selector_ismsg);
	const userContact = await page.$(selector_father);

	// VERIFICA SE TEM MENSAGEM
	if (isMsg) {
		await page.click('[class="_1pJ9J"]');
	} else {
		await page.evaluate(() => window.alert('VOCÊ NÃO POSSUI NOVAS MENSAGENS!!'));
	}
}
