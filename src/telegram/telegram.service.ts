import TelegramBot, { Message } from 'node-telegram-bot-api';
import * as Config from './botConfig.json';
import { ProductPrice } from '../product';

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
    const cleanMessage = this.escapeMessageForTelegramMarkdown(message);
    const result: Message = await this.telegramBot.sendMessage(
      this.recipient,
      cleanMessage,
      { parse_mode: 'MarkdownV2' }
    );

    return result;
  }

  public async pushProductPricesToTelegram(prices : ProductPrice[]): Promise<Message> {
    return await this.sendTelegramMessage(
      this.buildTelegramMessageFromProductPrices(prices)
    );
  }

  private buildTelegramMessageFromProductPrices(prices: ProductPrice[]): string {
    let message = `
*I've scavenged this stuff* 👀
`;
    for (const price of prices) {
      message += `
    ${this.formatPrice(price)}
`;
    }

    return message;
  }

  private formatPrice(price: ProductPrice): string {
    return `[${price.name}](${price.url}): ${price.price}`;
  }

  private escapeMessageForTelegramMarkdown(message: string): string {
    const escapedMessage = message.split('-').join('\\-').split('.').join('\\.');

    return escapedMessage;
  }

}
