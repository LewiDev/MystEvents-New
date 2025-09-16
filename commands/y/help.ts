import { Command } from '@sapphire/framework';
import type { ChatInputCommandInteraction } from 'discord.js';

/**
 * A basic help command that provides information about available commands.
 * Extend this command to dynamically list commands or provide more detailed help.
 */
export class HelpCommand extends Command {
  public constructor(ctx: Command.Context, options: Command.Options) {
    super(ctx, {
      ...options,
      name: 'help',
      description: 'Display a list of available commands.'
    });
  }

  public override registerApplicationCommands(registry: Command.Registry): void {
    registry.registerChatInputCommand((builder) =>
      builder.setName(this.name).setDescription(this.description)
    );
  }

  public override async chatInputRun(interaction: ChatInputCommandInteraction): Promise<void> {
    return interaction.reply({
      content:
        'Available commands:\n\u2022 `/ping` — Check the bot latency.\n\u2022 `/help` — Display this message.',
      allowedMentions: { repliedUser: false }
    });
  }

  /**
   * The help command does not implement a messageRun handler,
   * but you could add one here to support prefix-based commands as well.
   */
}
