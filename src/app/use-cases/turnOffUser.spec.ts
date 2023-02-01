/* eslint-disable prettier/prettier */
import { InMemoryUsersRepository } from "@test/repositories/in-memory-users-repository";
import { TurnOffUser } from "./turnOffUser";
import { makeUser } from "@test/factories/user-factory";

describe('Turn off a User', ()=> {
    it('should turn off a user', async() =>{
        const usersRepository = new InMemoryUsersRepository();
        const turnOffUser = new TurnOffUser(usersRepository);

        const newUser = makeUser();
        await usersRepository.create(newUser);

        await turnOffUser.execute({userId:newUser.id});

        expect(newUser.active).toBeFalsy();
        

    })
})