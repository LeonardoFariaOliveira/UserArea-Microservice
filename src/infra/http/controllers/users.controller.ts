/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserCreate } from '@app/use-cases/create-user';
import { GetUserData } from '@app/use-cases/get-user-data';
import { TurnOffUser } from '@app/use-cases/turnOffUser';
import { TurnOnUser } from '@app/use-cases/turnOnUser';
import { UpdateUserData } from '@app/use-cases/update-user-data';
import { CreateUserBody } from '../dtos/create-user-body';
import { UserViewModule } from '../views/user-view-module';

@Controller('user')
export class UsersController {
  constructor(
    private userCreate: UserCreate,
    private getUserData: GetUserData,
    private turnOffUser: TurnOffUser,
    private turnOnUser: TurnOnUser,
    private updateUserData: UpdateUserData,
  ) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { email, password, firstName, lastName } = body;


    await this.userCreate.execute({
      email,
      password,
      firstName,
      lastName,
    });

    return {
      message: 'Ok',
    };
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const { user } = await this.getUserData.execute({
      userId: id,
    });

    return {
      user: UserViewModule.toHTTP(user),
    };
  }

  @Patch('/:id/')
  async update(@Param('id') id: string, @Body() body: CreateUserBody) {
    const {
      email,
      password,
      firstName,
      lastName,
      CPF,
      phone,
      city,
      birthDate,
      country,
      photo_url,
    } = body;

    const { user } = await this.updateUserData.execute({
      id: id,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      CPF: CPF,
      phone: phone,
      city: city,
      birthDate: birthDate,
      country: country,
      photoUrl: photo_url,
    });

    console.log(user);

    return {
      user: UserViewModule.toHTTP(await user),
    };
  }

  @Patch('/:id/deadactivate')
  async turnOff(@Param('id') id: string) {
    await this.turnOffUser.execute({
      userId: id,
    });

    return {
      message: 'Ok',
    };
  }

  @Patch('/:id/activate')
  async turnOn(@Param('id') id: string) {
    await this.turnOnUser.execute({
      userId: id,
    });

    return {
      message: 'Ok',
    };
  }
}
