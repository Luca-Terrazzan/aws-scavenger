import { TelegramService } from './telegram.service';

describe('Telegram service', () => {

    it('Should be able to send a message', async () => {
        const telegramService: TelegramService = new TelegramService();
        const messageResult = await telegramService.sendTelegramMessage('test .. -- . message - from jest - test.');

        expect(messageResult).toBeDefined();
    });

    it('Should be able to send a formatted message', async () => {
        const telegramService: TelegramService = new TelegramService();
        const messageResult = await telegramService.sendTelegramMessage(`
* MESSAGE FROM JEST 🤡 *

\`\`\`This is
    a
        multiline\`\`\`

__some italic__

why not emojis?? 🤷‍♀️
        `);

        expect(messageResult).toBeDefined();
    });

    it('Should be able to send a list of prices', async () => {
        const telegramService: TelegramService = new TelegramService();
        const messageResult = await telegramService.pushProductPricesToTelegram([
            {
                name: 'jest product',
                price: 111,
                url: 'https://google.com'
            },
            {
                name: 'jest product 2',
                price: 222,
                url: 'https://google.com'
            }
        ]);

        expect(messageResult).toBeDefined();
    });

});
