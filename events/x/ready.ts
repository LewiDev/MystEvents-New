import { Listener } from '@sapphire/framework';

/**
 * Fired once when the client becomes ready.
 * Useful for logging successful startup or performing one-time setup tasks.
 */
export class ReadyListener extends Listener {
  public constructor(context: Listener.Context, options: Listener.Options) {
    super(context, {
      ...options,
      event: 'ready',
      once: true
    });
  }

  public run(): void {
    this.container.logger.info(
      `\uD83D\uDFE2 Bot is ready! Logged in as ${this.container.client.user?.tag}`
    );
  }
}
