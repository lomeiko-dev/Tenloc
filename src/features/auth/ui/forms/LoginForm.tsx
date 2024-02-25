import { memo, useCallback, useState } from 'react'
import style from '../Form.module.scss'

import { Text, enumStyleText } from 'shared/ui/text'
import { Field, enumStyleField } from 'shared/ui/field'
import { Checkbox } from 'shared/ui/checkbox'
import { Button, enumStyleButton } from 'shared/ui/button'

import EyeOpenIcon from 'shared/assets/img/svg-icon/eye-open.svg?react'
import EyeClosedIcon from 'shared/assets/img/svg-icon/eye-closed.svg?react'

interface ILoginFormProps {
   externalError?: string,
   isLoading?: boolean
   onClickRegistration: () => void
   onClickLogin: (
      login: string,
      password: string,
      isRememberMy: boolean
   ) => void
   onClickPasswordRecovery: () => void
}

const LoginForm: React.FC<ILoginFormProps> = memo((props) => {
   const {
      externalError,
      onClickLogin,
      onClickPasswordRecovery,
      onClickRegistration,
      isLoading,
   } = props

   const [isShowPassword, setShowPassword] = useState(true)

   const [error, setError] = useState<string | undefined>(undefined)
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const [isRememberMy, setRememberMy] = useState(false)

   const togglePasswordHandle = useCallback(() => {
      setShowPassword(!isShowPassword)
   }, [isShowPassword])

   const loginHandle = useCallback(() => {
      if (login.length < 4) {
         setError('Логин должен быть больше 4 символов')
         return
      } else setError(undefined)

      if (password.length < 6) {
         setError('Пароль должен быть больше 6 символов')
         return
      } else setError(undefined)

      onClickLogin(login, password, isRememberMy)
   }, [login, password, isRememberMy])

   return (
      <div className={style.form}>
         <Text styleText={enumStyleText.QUATERNARY_TITLE} text="Вход" />
         {error || externalError && <Text color="red" text={error || externalError} />}
         <Field
            value={login}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setLogin(e.target.value)
            }
            borderRadius={10}
            height="55px"
            styleField={enumStyleField.SECONDARY}
            margin="28px 0 0 0"
            placeholder="Почта"
         />
         <Field
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setPassword(e.target.value)
            }
            type={isShowPassword ? 'text' : 'password'}
            borderRadius={10}
            height="55px"
            styleField={enumStyleField.SECONDARY}
            margin="14px 0 0 0"
            placeholder="Пароль"
            childrenRight={
               !isShowPassword ? (
                  <EyeClosedIcon
                     width={30}
                     className={style.icon_btn}
                     onClick={togglePasswordHandle}
                  />
               ) : (
                  <EyeOpenIcon
                     width={30}
                     className={style.icon_btn}
                     onClick={togglePasswordHandle}
                  />
               )
            }
         />
         <div className={style.line}>
            <Checkbox onChecked={(value) => setRememberMy(!value)}>Запомнить пароль</Checkbox>
            <Button
               onClick={onClickPasswordRecovery}
               padding="0"
               fontSize={15}
               fontWeight={400}>
               Забыли пароль?
            </Button>
         </div>
         <Button
            onClick={loginHandle}
            borderRadius="10px"
            fontSize={16}
            fontWeight={500}
            height="55px"
            width="100%"
            styleButton={enumStyleButton.PRIMARY}
            margin="26px 0 0 0">
            {isLoading ? 'Загрузка...' : 'Войти'}
         </Button>
         <Text
            className={style.text}
            margin="32px 0 0 0"
            text="Еще нет аккаунта?"
         />
         <Button
            onClick={onClickRegistration}
            borderRadius="10px"
            width="100%"
            height="55px"
            styleButton={enumStyleButton.SECONDARY}
            fontSize={16}
            fontWeight={500}
            margin="20px 0 0 0">
            Зарегестрироваться
         </Button>
      </div>
   )
})

export default LoginForm
