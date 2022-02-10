import { loginIsTrue, messageIsTrue } from './validate'
import { env } from '../utils/env'
import { sleep } from '../utils/actions'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const puppeteer = require('puppeteer')

export async function start(typeBot: number, dayOfWeek?: string) {
  if (env.ci) {
    const browser = await puppeteer.launch({
      executablePath:
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      headless: true,
      defaultViewport: null,
      args: ['--disable-dev-shm-usage', '--no-sandbox', '--start-maximized']
    })
    const page = await browser.newPage()
    await page.setViewport({
      width: 1920,
      height: 941
    })
    if (typeBot === 1) {
      await page.goto(env.url)
      setInterval(() => {
        loginIsTrue(page, browser, '[class="_1lPgH"]')
        messageIsTrue(page, browser, '[class="_2nY6U _3C4Vf"]')
      }, 18000)
    } else if (typeBot === 2) {
      await page.goto(env.urlFatec)
      await sleep(3)
      await page.click('[class="feature-circle fa fa-clock-o"]')
      await sleep(3)
      const segButton = await page.$x('//a[contains(text(), "SEG NOTURNO")]')
      await sleep(2)
      await segButton[0].click()
      await sleep(2)
      if (dayOfWeek === 'semana') {
				const semestres = {
					sem4: {
						x: 0,
						y: 510
					}
				}
        await page.screenshot({
          path: 'img\\HoráriosFatec.png',
          clip: {
            x: semestres.sem4.x,
            y: semestres.sem4.y,
            width: 1630,
            height: 130
          }
        })
      } else if (dayOfWeek === 'segunda') {
				const semestres = {
					sem4: {
						x: 250,
						y: 510
					}
				}
				await page.screenshot({
          path: 'img\\segunda_feira.png',
          clip: {
            x: semestres.sem4.x,
            y: semestres.sem4.y,
            width: 225,
            height: 130
          }
        })
			} else if (dayOfWeek === 'terça') {
				const semestres = {
					sem4: {
						x: 477,
						y: 510
					}
				}
				await page.screenshot({
          path: 'img\\terça_feira.png',
          clip: {
            x: semestres.sem4.x,
            y: semestres.sem4.y,
            width: 227,
            height: 130
          }
        })
			} else if (dayOfWeek === 'quarta') {
				const semestres = {
					sem4: {
						x: 710,
						y: 510
					}
				}
				await page.screenshot({
          path: 'img\\quarta_feira.png',
          clip: {
            x: semestres.sem4.x,
            y: semestres.sem4.y,
            width: 225,
            height: 130
          }
        })
			} else if (dayOfWeek === 'quinta') {
				const semestres = {
					sem4: {
						x: 940,
						y: 510
					}
				}
				await page.screenshot({
          path: 'img\\quinta_feira.png',
          clip: {
            x: semestres.sem4.x,
            y: semestres.sem4.y,
            width: 225,
            height: 130
          }
        })
			} else if (dayOfWeek === 'sexta') {
				const semestres = {
					sem4: {
						x: 1170,
						y: 510
					}
				}
				await page.screenshot({
          path: 'img\\sexta_feira.png',
          clip: {
            x: semestres.sem4.x,
            y: semestres.sem4.y,
            width: 225,
            height: 130
          }
        })
			} else if (dayOfWeek === 'sabado') {
				const semestres = {
					sem4: {
						x: 1400,
						y: 510
					}
				}
				await page.screenshot({
          path: 'img\\sabado.png',
          clip: {
            x: semestres.sem4.x,
            y: semestres.sem4.y,
            width: 227,
            height: 130
          }
        })
			} 
      await sleep(2)
      await browser.close()
    }
  } else {
    const browser = await puppeteer.launch({
      executablePath:
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      headless: false,
      defaultViewport: null,
      args: ['--disable-dev-shm-usage', '--no-sandbox', '--start-maximized']
    })
    const page = await browser.newPage()
    await page.setViewport({
      width: 1920,
      height: 941
    })
    if (typeBot === 1) {
      await page.goto(env.url)
      setInterval(() => {
        loginIsTrue(page, browser, '[class="_1lPgH"]')
        messageIsTrue(page, browser, '[class="_2nY6U _3C4Vf"]')
      }, 18000)
    } else if (typeBot === 2) {
      await page.goto(env.urlFatec, { waitUntil: 'networkodle2' })
      await sleep(3)
      await page.click('[class="feature-circle fa fa-clock-o"]')
      await sleep(3)
      const segButton = await page.$x('//a[contains(text(), "SEG NOTURNO")]')
      await sleep(2)
      await segButton[0].click()
      await sleep(2)
      await page.screenshot({
        path: 'img\\HoráriosFatec.jpg',
        type: 'jpeg',
        clip: { x: 50, y: 2, width: 300, height: 300 }
      })
      await sleep(1)
      await browser.close()
    }
  }
}
