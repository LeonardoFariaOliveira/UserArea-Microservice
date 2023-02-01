import { User } from '@app/entities/user';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '@app/repositories/users-repository';
import { UserNotFound } from './errors/user-not-found';

interface UpdateUserDataRequest {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  CPF?: string | null;
  phone?: string | null;
  country?: string | null;
  city?: string | null;
  photoUrl?: string | null;
  birthDate?: Date | null;
}

interface UpdateUserDataResponse {
  user: User;
}

@Injectable()
export class UpdateUserData {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    request: UpdateUserDataRequest,
  ): Promise<UpdateUserDataResponse> {
    const {
      id,
      password,
      firstName,
      lastName,
      CPF,
      phone,
      country,
      city,
      photoUrl,
      birthDate,
    } = request;

    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UserNotFound();
    }

    user.update({
      password,
      firstName,
      lastName,
      CPF,
      phone,
      country,
      city,
      photoUrl,
      birthDate,
    });

    return {
      user,
    };
  }
}
