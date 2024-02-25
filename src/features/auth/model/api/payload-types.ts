import { IProfile } from 'entities/profile'
import { IUserScheme } from 'entities/user'

export interface ILoginProps {
   login: string
   password: string
}

export interface IRegistrationProps extends Omit<IUserScheme, 'id'> {}

export interface ICreateProfile extends Omit<IProfile, 'id'> {}
