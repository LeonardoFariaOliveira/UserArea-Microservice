import { UsersRepository } from '@app/repositories/users-repository';
import { randomUUID } from 'crypto';

export interface UserProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  CPF?: string | null;
  phone?: string | null;
  country?: string | null;
  city?: string | null;
  photoUrl?: string | null;
  birthDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  active?: boolean;
}

export interface UserUpdateProps {
  password?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  CPF?: string | null;
  phone?: string | null;
  country?: string | null;
  city?: string | null;
  photoUrl?: string | null;
  birthDate?: Date | null;
  active?: boolean;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: new Date(),
      active: props.active ?? true,
    };
  }

  public get id(): string {
    return this._id;
  }

  public set email(email: string) {
    this.props.email = email;
  }
  public get email(): string {
    return this.props.email;
  }

  public set password(password: string) {
    this.props.password = password;
  }
  public get password(): string {
    return this.props.password;
  }

  public set firstName(firstName: string) {
    this.props.firstName = firstName;
  }
  public get firstName(): string {
    return this.props.firstName;
  }

  public set lastName(lastName: string) {
    this.props.lastName = lastName;
  }
  public get lastName(): string {
    return this.props.lastName;
  }

  public set CPF(CPF: string) {
    this.props.CPF = CPF;
  }
  public get CPF(): string {
    return this.props.CPF;
  }

  public set phone(phone: string) {
    this.props.phone = phone;
  }
  public get phone(): string {
    return this.props.phone;
  }

  public set country(country: string) {
    this.props.country = country;
  }
  public get country(): string {
    return this.props.country;
  }

  public set city(city: string) {
    this.props.city = city;
  }
  public get city(): string {
    return this.props.city;
  }

  public set photoUrl(photoUrl: string) {
    this.props.photoUrl = photoUrl;
  }
  public get photoUrl(): string {
    return this.props.photoUrl;
  }

  public set birthDate(birthDate: Date) {
    this.props.birthDate;
  }
  public get birthDate(): Date {
    return this.props.birthDate;
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public update(user: UserUpdateProps) {
    this.props.password = user.password ?? this.props.password;
    this.props.firstName = user.firstName ?? this.props.firstName;
    this.props.lastName = user.lastName ?? this.props.lastName;
    this.props.CPF = user.CPF ?? this.props.CPF;
    this.props.phone = user.phone ?? this.props.phone;
    this.props.country = user.country ?? this.props.country;
    this.props.city = user.city ?? this.props.city;
    this.props.photoUrl = user.photoUrl ?? this.props.photoUrl;
    this.props.birthDate = user.birthDate ?? this.props.birthDate;
    this.props.updatedAt = new Date();
    this.props.active = user.active ?? this.props.active;
  }

  public set active(active: boolean) {
    this.props.active = active;
  }
  public get active() {
    return this.props.active;
  }
}
