import { IUserScheme } from 'entities/user'

export interface ILoginProps {
   login: string
   password: string
}

export interface IRegistrationProps extends Omit<IUserScheme, 'id'> {}
