/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '@app/repositories/users-repository';
import { UserNotFound } from './errors/user-not-found';

interface TurnOnUserRequest {
  userId: string;
}

type TurnOnUserResponse = void;

@Injectable()
export class TurnOnUser{

    constructor(
        private usersRepository: UsersRepository
    ){}

    async execute(
        request:TurnOnUserRequest
    ):Promise<TurnOnUserResponse>{

        const {userId} = request

        const user = await this.usersRepository.findById(userId);

        if (!user) {
          throw new UserNotFound();
        }

        user.update({active:true})


    }

}