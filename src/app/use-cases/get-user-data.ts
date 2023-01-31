/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';
import { UserNotFound } from './errors/user-not-found';

interface GetUserDataRequest {
  userId: string;
}

interface GetUserDataResponse {
  user: User;
}

export class GetUserData {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: GetUserDataRequest): Promise<GetUserDataResponse> {
    const {userId} = request

    const user = await this.usersRepository.findById(userId)

    if(!user){
      throw new UserNotFound()
    }

    return {
      user
    }

    
  }
}
