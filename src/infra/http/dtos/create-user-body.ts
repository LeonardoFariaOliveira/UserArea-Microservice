import {
  IsNotEmpty,
  IsUUID,
  Length,
  IsString,
  IsEmpty,
  IsDate,
  IsBoolean,
} from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @Length(15, 120)
  email: string;

  @IsNotEmpty()
  @Length(10, 20)
  password: string;

  @IsNotEmpty()
  @Length(3, 15)
  firstName: string;

  @IsNotEmpty()
  @Length(3, 15)
  lastName: string;

  @Length(11, 15)
  CPF: string;

  @Length(9, 13)
  phone: string;

  @Length(3, 25)
  country: string;

  @Length(3, 20)
  city: string;

  photo_url: string;

  @IsDate()
  birthDate: Date;
}
