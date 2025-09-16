/**
 * Centralized collection of error messages used throughout the bot.
 * Extend this object as needed to maintain consistency in your error handling.
 */
export const ERROR_MESSAGES = {
  MISSING_TOKEN: 'DISCORD_TOKEN is missing from the environment variables.',
  MISSING_MONGO_URI: 'MONGO_URI is missing from the environment variables.',
  GENERIC: 'An unexpected error occurred. Please try again later.'
} as const;

/**
 * Retrieves an error message by key. If the key is not found, returns a generic error message.
 *
 * @param key The key of the error message to retrieve.
 * @returns The corresponding error message.
 */
export function getErrorMessage(key: keyof typeof ERROR_MESSAGES): string {
  return ERROR_MESSAGES[key] ?? ERROR_MESSAGES.GENERIC;
}
