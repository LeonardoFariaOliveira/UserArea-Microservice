import { User } from '@app/entities/user';

export function makeUser(id?: string) {
  return new User(
    {
      email: 'usuario.teste@teste.com',
      password: 'teste123',
      firstName: 'Usuario',
      lastName: 'Teste,',
    },
    id,
  );
}
