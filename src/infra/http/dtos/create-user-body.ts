import {
  IsNotEmpty,
  IsUUID,
  Length,
  IsString,
  IsEmpty,
  IsDate,
  IsBoolean,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class CreateUserBody {
  @IsEmail()
  @Length(15, 120)
  @IsOptional()
  email?: string;

  @IsOptional()
  @Length(10, 20)
  password?: string;

  @IsOptional()
  @Length(3, 15)
  firstName?: string;

  @IsOptional()
  @Length(3, 15)
  lastName?: string;

  @IsOptional()
  @Length(13)
  CPF?: string;

  @IsOptional()
  @Length(9)
  phone?: string;

  @IsOptional()
  @Length(3)
  city?: string;

  @IsOptional()
  @Length(3)
  country?: string;

  @IsOptional()
  @IsDate()
  birthDate?: Date;

  @IsOptional()
  photo_url?: string;
}
