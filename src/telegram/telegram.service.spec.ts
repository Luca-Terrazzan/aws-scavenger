import { TelegramService } from './telegram.service';

describe('Telegram service', () => {

    it('Should be able to send a message', async () => {
        const telegramService: TelegramService = new TelegramService();
        const messageResult = await telegramService.sendTelegramMessage('test message from jest');

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

});
