/* eslint-disable prettier/prettier */
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
  user: Promise<User>
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

    console.log('execute a update \n\n\n');

    const user = await this.usersRepository.findById(id);

    console.log(user);

    if (!user) {
      console.log('usuario nao encontrado');
      throw new UserNotFound();
    }

    // _id: '',
    // props: undefined,
    // id: '',
    // email: '',
    // createdAt: undefined,
    // active: false

    const userUpdated = this.usersRepository.update({
        id:id,
        password: password,
        firstName: firstName,
        lastName: lastName,
        CPF: CPF,
        phone: phone,
        country: country,
        city: city,
        photoUrl: photoUrl,
        birthDate: birthDate
      });

  

    return {
      user: userUpdated,
    };
  }
}
