import TelegramBot, { Message } from 'node-telegram-bot-api';
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

  public async sendTelegramMessage(message: string): Promise<Message> {
    const result:Message  = await this.telegramBot.sendMessage(this.recipient, message);

    return result;
  }

}
