import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { UserCreate } from './create-user';

describe('Create a user', () => {
  it('should be able to create a user', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const userCreate = new UserCreate(usersRepository);

    await userCreate.execute({
      email: 'usuario.teste@teste.com',
      password: 'teste123',
      firstName: 'Usuario',
      lastName: 'Teste',
    });

    expect(usersRepository.users).toHaveLength(1);
  });
});
