async function selectorVisible(page, browser, selector_photo: string) {
  const photoLogin = await page.$(selector_photo);
  if (photoLogin) {
    //await page.click(selector_photo);
    await page.waitForSelector(selector_photo, {visible: true});
    await page.evaluate(() => {
      return window.alert(`VOCÊ ESTÁ LOGADO!!`);
    },);
  } else {
    await browser.close();
    throw ('Erro! não existe seletor ou seletor passado como argumento errado!');
  }
};

module.exports = selectorVisible;