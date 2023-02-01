import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = [];

  async turnOnUser(userId: string): Promise<void> {
    const userTurnedOn = this.users.find((item) => item.id === userId);

    if (!userTurnedOn) {
      return null;
    }

    this.users.map((item) => {
      if (item.id === userId) {
        item = null;
      }
    });

    userTurnedOn.active = true;
    this.users.push(userTurnedOn);
  }

  async turnOffUser(userId: string): Promise<void> {
    const userTurnedOff = this.users.find((item) => item.id === userId);

    if (!userTurnedOff) {
      return null;
    }

    this.users.map((item) => {
      if (item.id === userId) {
        item = null;
      }
    });

    userTurnedOff.active = false;
    this.users.push(userTurnedOff);
  }

  async update(user: User): Promise<User> {
    const userUpdated = this.users.find((item) => item.id === user.id);

    if (!userUpdated) {
      return null;
    }

    this.users.map((item) => {
      if (item.id === user.id) {
        item = null;
      }
    });

    userUpdated.password = user.password;
    userUpdated.firstName = user.firstName;
    userUpdated.lastName = user.lastName;
    userUpdated.CPF = user.CPF;
    userUpdated.phone = user.phone;
    userUpdated.country = user.country;
    userUpdated.city = user.city;
    userUpdated.photoUrl = user.photoUrl;
    userUpdated.birthDate = user.birthDate;

    this.users.push(userUpdated);
  }

  async findById(userId: string): Promise<User> {
    const user = this.users.find((item) => item.id === userId);

    if (!user) {
      return null;
    }

    return user;
  }

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}
