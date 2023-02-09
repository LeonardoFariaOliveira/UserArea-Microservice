import { User } from '@app/entities/user';

export class UserViewModule {
  static toHTTP(user: User) {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      CPF: user.CPF,
      phone: user.phone,
      country: user.country,
      city: user.city,
      photoUrl: user.photoUrl,
      birthDate: user.birthDate,
    };
  }
}
