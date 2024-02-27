import { Suspense, memo, useCallback, useState } from 'react'
import { LoginFormLazy, RegistrationFormLazy } from './forms'
import {
   useLazyCreateProfileQuery,
   useLazyLoginQuery,
   useRegistrationMutation,
} from '..'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { saveAuth, setAuth } from 'entities/auth'
import { enumNotification } from 'entities/profile'

interface IAuthFormProps {
   onClosedModal: () => void
}

export const AuthForm: React.FC<IAuthFormProps> = memo((props) => {
   const { onClosedModal } = props

   const [isLoginForm, setIsLoginForm] = useState(false)
   const dispatch = useAppDispatch()

   const [error, setError] = useState<string | undefined>(undefined)
   const [registration, resultRegistration] = useRegistrationMutation()
   const [createProfile] = useLazyCreateProfileQuery()
   const [triggerLogin, resultLogin] = useLazyLoginQuery()

   const toggleFormHandle = useCallback(() => {
      setIsLoginForm(!isLoginForm)
   }, [isLoginForm])

   const loginHandle = useCallback(
      async (login: string, password: string, isRememberMy: boolean) => {
         const result = await triggerLogin({ login, password })

         if (result.data?.length !== 0 && result.data) {
            if (isRememberMy) dispatch(saveAuth(result.data[0].id))
            onClosedModal()
         } else {
            setError('Логин или пароль не верны.')
         }
      },
      []
   )

   const registrationHandle = useCallback(
      async (name: string, email: string, phone: string, password: string) => {
         const user = await registration({
            name,
            email,
            phone,
            password,
         }).unwrap()

         await createProfile({
            avatar: '',
            typeNotification: enumNotification.EMAIL,
            userId: user.id,
         })

         dispatch(setAuth(user.id))
         onClosedModal()
      },
      []
   )

   return (
      <div>
         {isLoginForm ? (
            <Suspense>
               <LoginFormLazy
                  externalError={error}
                  isLoading={resultLogin.isLoading}
                  onClickRegistration={toggleFormHandle}
                  onClickLogin={loginHandle}
                  onClickPasswordRecovery={() => null}
               />
            </Suspense>
         ) : (
            <Suspense>
               <RegistrationFormLazy
                  isLoading={resultRegistration.isLoading}
                  onClickLogin={toggleFormHandle}
                  onClickRegistration={registrationHandle}
               />
            </Suspense>
         )}
      </div>
   )
})
