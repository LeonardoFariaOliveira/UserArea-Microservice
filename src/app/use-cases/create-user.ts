/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from "../entities/user";
import { UsersRepository } from "../repositories/users-repository";

interface UserCreateRequest{
    email:string,
    password:string,
    firstName:string,
    lastName:string
}

type UserCreateResponse = void

@Injectable()
export class UserCreate{''
    constructor(private usersRepository: UsersRepository){}

    async execute(
        request:UserCreateRequest
    ):Promise<UserCreateResponse>{

        const {email, password, firstName, lastName} = request

        const user = new User({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
        })

        await this.usersRepository.create(user)

    }
}