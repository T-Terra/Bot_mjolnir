import dotenv from 'dotenv';
dotenv.config();

/**
 * url -> Página de acesso para o whatsapp
 * 
 * msgMenu -> mensagem personalizada para envio
 */
export const env = {
	url: process.env.URL,
	msgMenu: process.env.MSG_MENU,
	urlFatec: process.env.URL_FATEC,
	ci: process.env.CI === 'true'
};
