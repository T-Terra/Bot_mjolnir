import { sendMessage, reloadPage } from './sendMessage';

/**
 * @param {*} page instância de page
 * @param {*} browser instância de browser
 * @param {string} selectorPhoto seletor da foto de perfil do whatsapp
 * @return {*} retorna true se photoLogin for true
 */
export async function loginIsTrue(page, browser, selectorPhoto: string) {
	const photoLogin = await page.$(selectorPhoto);
	if (photoLogin) {
		await page.waitForSelector(selectorPhoto, { visible: true });
		return true;
	} else {
		await browser.close();
		throw new Error('Erro! não existe seletor ou seletor passado como argumento errado!');
	}
}


/**
 * @param {*} page instância de page
 * @param {*} browser instância de browser
 * @param {string} msgIsTrue valida se tem mensagens pelo seletor
 */
export async function messageIsTrue(page, browser, msgIsTrue: string) {
	//const isMsgTrue = await page.$(msgIsTrue);
	//const isMsgFalse = await page.$(msgIsFalse);
	const message = await page.evaluate(() => {
		return document.querySelector('._2nY6U._3C4Vf');
	});
	if (message === undefined) {
		setTimeout(async () => {
			await page.click(msgIsTrue);
			sendMessage(page, browser, '[class="_2lMWa"]', '[class="_3HQNh _1Ae7k"]');
			reloadPage(page);
		}, 2000);
	} else if (message === null){
		console.log('Você não possui novas mensagens!');
		return;
	}


}
