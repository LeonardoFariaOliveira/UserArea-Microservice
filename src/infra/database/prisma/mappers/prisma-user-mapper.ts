import { User } from '@app/entities/user';
import { User as rawUser } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: User) {
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

  static toDomain(raw: rawUser) {
    return new User({
      email: raw.email,
      password: raw.password,
      firstName: raw.firstName,
      lastName: raw.lastName,
      CPF: raw.CPF,
      phone: raw.phone,
      country: raw.country,
      city: raw.city,
      photoUrl: raw.photoUrl,
      birthDate: raw.birthDate,
    });
  }
}
