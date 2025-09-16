import { UserModel, type IUser } from '../models/User';

/**
 * Service layer for user-related database operations.
 */

/**
 * Finds an existing user by Discord ID or creates a new one if not found.
 *
 * @param discordId The Discord ID of the user.
 * @returns A promise resolving to the user document.
 */
export async function findOrCreateUser(discordId: string): Promise<IUser> {
  let user = await UserModel.findOne({ discordId });
  if (!user) {
    user = await UserModel.create({ discordId });
  }
  return user;
}
