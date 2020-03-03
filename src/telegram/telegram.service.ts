import TelegramBot from 'node-telegram-bot-api';
import * as Config from './botConfig.json';

export class TelegramService {

  private readonly token: string;
  private readonly recipient: string;
  private readonly telegramBot: TelegramBot;

  constructor() {
    this.token = Config.token;
    this.recipient = Config.chatId;
    this.telegramBot = new TelegramBot(this.token);
  }

  public async sendMessageToPrivateChat(message: string) {
    const result = await this.telegramBot.sendMessage(this.recipient, message);

    return result;
  }

}
