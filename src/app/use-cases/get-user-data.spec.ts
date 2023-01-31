import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { GetUserData } from './get-user-data';
import { makeUser } from '@test/factories/user-factory';

describe('Get user data', () => {
  it('should be able to get user data', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const getUserData = new GetUserData(usersRepository);

    const newUser = makeUser();

    await usersRepository.create(newUser);

    const { user } = await getUserData.execute({
      userId: newUser.id,
    });

    expect(user).toBeTruthy();
  });
});
