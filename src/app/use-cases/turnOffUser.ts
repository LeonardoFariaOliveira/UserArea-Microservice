/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '@app/repositories/users-repository';
import { UserNotFound } from './errors/user-not-found';

interface TurnOffUserRequest {
  userId: string;
}

type TurnOffUserResponse = void;

@Injectable()
export class TurnOffUser{

    constructor(
        private usersRepository: UsersRepository
    ){}

    async execute(
        request:TurnOffUserRequest
    ):Promise<TurnOffUserResponse>{

        const {userId} = request

        const user = await this.usersRepository.findById(userId);

        if (!user) {
          throw new UserNotFound();
        }

        this.usersRepository.turnOffUser(
          userId
        )


    }

}