import { User } from './user';

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User({
      email: 'usuario.teste@teste.com',
      password: 'teste123',
      firstName: 'Usuario',
      lastName: 'Teste',
    });

    expect(user).toBeTruthy();
  });
});
