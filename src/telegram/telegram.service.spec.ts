import { TelegramService } from './telegram.service';

describe('Telegram service', () => {

    it('Should be able to send a message', async () => {
        const telegramService: TelegramService = new TelegramService();
        const messageResult = await telegramService.sendMessageToPrivateChat('asdas');

        expect(messageResult).toBeDefined();
    });

});
