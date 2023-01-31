import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  async findById(userId: string): Promise<User> {
    const user = this.users.find((item) => item.id === userId);

    if (!user) {
      return null;
    }

    return user;
  }
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}
