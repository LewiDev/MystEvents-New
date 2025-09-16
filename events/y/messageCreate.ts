import { Listener } from '@sapphire/framework';
import type { Message } from 'discord.js';

/**
 * Listens for every message sent in guild channels.
 * You can expand this listener to implement custom behaviour such as logging or moderation.
 */
export class MessageCreateListener extends Listener {
  public constructor(context: Listener.Context, options: Listener.Options) {
    super(context, {
      ...options,
      event: 'messageCreate'
    });
  }

  public run(message: Message): void {
    if (message.author.bot) return;
    // This log runs for every user message; adjust or remove as needed.
    this.container.logger.debug(`\uD83D\uDCAC ${message.author.tag}: ${message.content}`);
  }
}
