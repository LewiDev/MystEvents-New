import { Command } from '@sapphire/framework';
import type { ChatInputCommandInteraction, Message } from 'discord.js';

/**
 * A simple ping command that replies with the bot's response latency.
 * This command demonstrates how to implement both slash and message commands in Sapphire.
 */
export class PingCommand extends Command {
  public constructor(ctx: Command.Context, options: Command.Options) {
    super(ctx, {
      ...options,
      name: 'ping',
      description: 'Check the bot latency.'
    });
  }

  /**
   * Registers the slash command with Discord.
   */
  public override registerApplicationCommands(registry: Command.Registry): void {
    registry.registerChatInputCommand((builder) =>
      builder.setName(this.name).setDescription(this.description)
    );
  }

  /**
   * Executes when a user triggers the slash command.
   */
  public override async chatInputRun(interaction: ChatInputCommandInteraction): Promise<void> {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    const latency = sent.createdTimestamp - interaction.createdTimestamp;
    await interaction.editReply(`Pong! Latency: ${latency}ms`);
  }

  /**
   * Executes when a user triggers the message command (e.g. !ping).
   */
  public override async messageRun(message: Message): Promise<void> {
    const sent = await message.channel.send('Pinging...');
    const latency = sent.createdTimestamp - message.createdTimestamp;
    await sent.edit(`Pong! Latency: ${latency}ms`);
  }
}
