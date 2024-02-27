import { memo, useCallback, useState } from 'react'
import style from '../Form.module.scss'

import { Field, enumStyleField } from 'shared/ui/field'
import { Text, enumStyleText } from 'shared/ui/text'
import { Button, enumStyleButton } from 'shared/ui/button'

import EyeOpenIcon from 'shared/assets/img/svg-icon/eye-open.svg?react'
import EyeClosedIcon from 'shared/assets/img/svg-icon/eye-closed.svg?react'

import { useLazyGetUserByLoginQuery } from '../../model/api/auth-api'
import ReactInputMask from 'react-input-mask'

interface IRegistrationFormProps {
   isLoading?: boolean
   onClickRegistration: (
      name: string,
      email: string,
      phone: string,
      password: string
   ) => void
   onClickLogin: () => void
}

const RegistrationForm: React.FC<IRegistrationFormProps> = memo((props) => {
   const { onClickLogin, onClickRegistration, isLoading } = props

   const [isShowPassword, setShowPassword] = useState(true)
   const [getUser] = useLazyGetUserByLoginQuery()

   const [error, setError] = useState<string | undefined>(undefined)
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [password, setPassword] = useState('')

   const togglePasswordHandle = useCallback(() => {
      setShowPassword(!isShowPassword)
   }, [isShowPassword])

   const registrationHandle = useCallback(async () => {
      if (name.length < 6) {
         setError('Имя должно быть больше 6 символов')
         return
      } else setError(undefined)

      if (email.length < 4) {
         setError('Почта должна быть больше 4 символов')
         return
      } else setError(undefined)

      if (phone.length === 0) {
         setError('Телефон не указан')
         return
      } else setError(undefined)

      if (password.length < 6) {
         setError('Пароль должен быть больше 6 симоволов')
         return
      } else setError(undefined)

      const user = await getUser(email)

      if (user.data?.length !== 0) {
         setError('Почта уже занята')
         setEmail('')
         setName('')
         setPassword('')
         setPhone('')
         return
      } else setError(undefined)

      onClickRegistration(name, email, phone, password)
   }, [name, email, password, error])

   return (
      <div className={style.form}>
         <Text styleText={enumStyleText.QUATERNARY_TITLE} text="Регистрация" />
         {error && <Text color="red" text={error} />}
         <Field
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setName(e.target.value)
            }
            borderRadius={10}
            height="55px"
            styleField={enumStyleField.SECONDARY}
            margin="28px 0 0 0"
            placeholder="Имя"
         />
         <Field
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setEmail(e.target.value)
            }
            borderRadius={10}
            height="55px"
            styleField={enumStyleField.SECONDARY}
            margin="14px 0 0 0"
            placeholder="E-mail"
         />
         <ReactInputMask
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setPhone(e.target.value)
            }
            mask="+7 (999) 999 - 99 - 99"
            maskChar="_"
            className={style.input_mask}
            placeholder="Телефон"
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
         <Button
            onClick={registrationHandle}
            borderRadius="10px"
            fontSize={16}
            fontWeight={500}
            height="55px"
            width="100%"
            styleButton={enumStyleButton.PRIMARY}
            margin="26px 0 0 0">
            {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
         </Button>
         <Text
            className={style.text}
            margin="32px 0 0 0"
            text="Регистрируясь, вы принимаете условия."
         />
         <Text
            className={style.text}
            margin="17px 0 0"
            text="Уже есть аккаунт?"
         />
         <Button
            onClick={onClickLogin}
            borderRadius="10px"
            width="100%"
            height="55px"
            styleButton={enumStyleButton.SECONDARY}
            fontSize={16}
            fontWeight={500}
            margin="20px 0 0 0">
            Войти
         </Button>
      </div>
   )
})

export default RegistrationForm
