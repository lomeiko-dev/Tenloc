import { useAppSelector } from './useAppSelector'
import { userIdSelection } from 'entities/auth'
import { IProfile, useLazyGetProfileByUserIdQuery } from 'entities/profile'
import { IUserScheme, useLazyGetUserByIdQuery } from 'entities/user'
import { useEffect } from 'react'

interface IData {
   user?: IUserScheme
   profile?: IProfile
}

interface IUseAuthReturned {
   isAuth: boolean
   data?: IData
}

export const useAuth = (): IUseAuthReturned => {
   const userId = useAppSelector(userIdSelection)
   const [getUser, user] = useLazyGetUserByIdQuery()
   const [getProfile, profile] = useLazyGetProfileByUserIdQuery()

   useEffect(() => {
      if (userId) {
         getUser(userId).unwrap()
         getProfile(userId).unwrap()
      }
   }, [userId])

   if (userId) {
      return { data: { profile: profile.data, user: user.data }, isAuth: true }
   }

   return { isAuth: false }
}
