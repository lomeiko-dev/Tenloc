import { useAppSelector } from './useAppSelector'
import { userIdSelection } from 'entities/auth'
import { IUserScheme, useLazyGetUserByIdQuery } from 'entities/user'
import { useEffect } from 'react'

interface IUseAuthReturned {
   isAuth: boolean
   data?: IUserScheme
}

export const useAuth = (): IUseAuthReturned => {
   const userId = useAppSelector(userIdSelection)
   const [getUser, user] = useLazyGetUserByIdQuery()

   useEffect(() => {
      if (userId) getUser(userId).unwrap()
   }, [userId])

   if (userId) {
      return { data: user.data, isAuth: true }
   }

   return { isAuth: false }
}
