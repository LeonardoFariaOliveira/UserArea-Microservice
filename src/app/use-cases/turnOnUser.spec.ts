/* eslint-disable prettier/prettier */
import { InMemoryUsersRepository } from "@test/repositories/in-memory-users-repository";
import { TurnOnUser } from "./turnOnUser";
import { makeUser } from "@test/factories/user-factory";

describe('Turn on a User', ()=> {
    it('should turn on a user', async() =>{
        const usersRepository = new InMemoryUsersRepository();
        const turnOnUser = new TurnOnUser(usersRepository);

        const newUser = makeUser();
        await usersRepository.create(newUser);

        await turnOnUser.execute({userId:newUser.id});

        expect(newUser.active).toBeTruthy();
        

    })
})