import { Module } from '@nestjs/common';
import { UserCreate } from '@app/use-cases/create-user';
import { GetUserData } from '@app/use-cases/get-user-data';
import { TurnOffUser } from '@app/use-cases/turnOffUser';
import { TurnOnUser } from '@app/use-cases/turnOnUser';
import { UpdateUserData } from '@app/use-cases/update-user-data';
import { DatabaseModule } from '@infra/database/database.module';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UserCreate, GetUserData, TurnOffUser, TurnOnUser, UpdateUserData],
})
export class HTTPModule {}
