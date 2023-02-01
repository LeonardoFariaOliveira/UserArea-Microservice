import { User } from '../entities/user';

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;
  abstract findById(userId: string): Promise<User>;
  abstract update(user: User): Promise<User>;
  abstract turnOffUser(userId: string): Promise<void>;
  abstract turnOnUser(userId: string): Promise<void>;
}
