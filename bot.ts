import 'dotenv/config';
import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import { connectDb } from './handlers/mongoHandler';

/**
 * Entry point of the bot.
 * Loads environment variables, establishes a database connection and starts the Sapphire client.
 *
 * Sensitive data such as the Discord token and Mongo connection string should be provided
 * through environment variables. See the README or `.env.example` for more information.
 */
async function main(): Promise<void> {
  // Ensure required environment variables are present
  const token = process.env.DISCORD_TOKEN;
  if (!token) {
    throw new Error('DISCORD_TOKEN environment variable is not defined.');
  }

  // Connect to the database before starting the bot
  await connectDb();

  const client = new SapphireClient({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
  });

  client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user?.tag}`);
  });

  try {
    await client.login(token);
  } catch (error) {
    console.error('❌ Failed to login to Discord:', error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('❌ An error occurred while starting the bot:', error);
});
