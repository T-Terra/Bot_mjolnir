import { sendMessage, closePage } from './sendMessage';

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
	const message = await page.evaluate(() => {
		return document.querySelector('._2nY6U._3C4Vf');
	});
	if (message === undefined) {
		setTimeout(async () => {
			await page.click(msgIsTrue);
			sendMessage(page, browser, '[class="_2lMWa"]', '[class="_3HQNh _1Ae7k"]');
		}, 2000);
	} else if (message === null){
		console.log('Você não possui novas mensagens!');
		closePage(page, browser);
	}

}
