import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { UpdateUserData } from './update-user-data';
import { makeUser } from '@test/factories/user-factory';

describe('Update user data', () => {
  it('should update the user data', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const updateUserData = new UpdateUserData(usersRepository);

    const newUser = makeUser();

    await usersRepository.create(newUser);

    await updateUserData.execute({
      id: newUser.id,
      email: 'update.test@test.com',
      password: 'updatetest123',
      firstName: 'Update',
      lastName: 'Test',
      CPF: '123.456.789-10',
      phone: '12345678910',
      country: 'Updatil',
      city: 'Testantes',
      birthDate: new Date('12/05/2003'),
    });

    expect(newUser).toEqual(
      expect.objectContaining({
        id: newUser.id,
        password: 'updatetest123',
        firstName: 'Update',
        lastName: 'Test',
        CPF: '123.456.789-10',
        phone: '12345678910',
        country: 'Updatil',
        city: 'Testantes',
        birthDate: new Date('12/05/2003'),
      }),
    );
  });
});
