export async function cliqueNoElemento(page, xPath: string) {
	const el = await page.$x(xPath);
	await page.click(el);
}
