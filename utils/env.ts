import 'dotenv/config';

/**
 * Utility functions for accessing required environment variables.
 */

/**
 * Retrieves the specified environment variable or throws an error if it is undefined.
 *
 * @param key The name of the environment variable to retrieve.
 * @returns The value of the environment variable.
 */
export function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined.`);
  }
  return value;
}
