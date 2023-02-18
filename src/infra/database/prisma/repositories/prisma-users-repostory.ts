/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from "@app/entities/user";
import { UsersRepository } from "@app/repositories/users-repository";
import { PrismaService } from "../prisma.service";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";
import { raw } from "@prisma/client/runtime";

@Injectable()
export class PrismaUsersRepository implements UsersRepository{

    constructor(private prismaService: PrismaService){}

    

    async create(user: User): Promise<void> {

        console.log("criou");
        const raw = PrismaUserMapper.toPrisma(user)
        await this.prismaService.user.create({
            data:raw
        })
    }

    async findById(userId: string): Promise<User> {
        const user = await this.prismaService.user.findUnique({
            where:{
                id: userId
            }
        })

        if(!user){
            return null
        }

        return PrismaUserMapper.toDomain(user)
    }

    async update(user: User): Promise<User> {
        
        console.log("raw")
        const raw = PrismaUserMapper.toPrisma(user)

        const userUpdated =await this.prismaService.user.update({
            where:{
                id:user.id
            },
            data:raw
        })

        console.log(userUpdated)

        if(!userUpdated){
            console.log("usuario não encontrado")
            return null
        }

        return PrismaUserMapper.toDomain(userUpdated)
        
    }

    async turnOffUser(userId: string): Promise<void> {
        await this.prismaService.user.update({
            where:{
                id:userId
            },
            data:{
                active:false
            }
        })
    }

    async turnOnUser(userId: string): Promise<void> {
                await this.prismaService.user.update({
            where:{
                id:userId
            },
            data:{
                active:true
            }
        })
    }
    
}