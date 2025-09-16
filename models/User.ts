import { Schema, model, Document } from 'mongoose';

/**
 * Interface representing a User document in MongoDB.
 */
export interface IUser extends Document {
  discordId: string;
  createdAt: Date;
}

/**
 * Mongoose schema for the User collection.
 */
const UserSchema = new Schema<IUser>({
  discordId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

/**
 * User model.
 */
export const UserModel = model<IUser>('User', UserSchema);
