import { memo, useEffect, useState } from 'react'
import style from './ChangePasswordForm.module.scss'
import classNames from 'classnames'
import { Text, enumStyleText } from 'shared/ui/text'
import { FieldPassword, enumStyleField } from 'shared/ui/field'
import { useChangePasswordMutation } from 'features/profile-form/model/api/profile-api'

interface IChangePasswordFormProps {
   profileId: string
   oldPassword: string
   className?: string
   margin?: string
}

export const ChangePasswordForm: React.FC<IChangePasswordFormProps> = memo(
   (props) => {
      const { className, margin, profileId, oldPassword } = props

      const [oldPasswordValue, setOldPassword] = useState('')
      const [newPasswordValue, setNewPassword] = useState('')
      const [confirmPasswordValue, setConfirmPassword] = useState('')
      const [changePassword, resultChanged] = useChangePasswordMutation()
      const [error, setError] = useState<string | undefined>(undefined)
      const [success, setSuccess] = useState<string | undefined>(undefined)

      useEffect(() => {
         const func = async () => {
            if (
               oldPasswordValue !== '' &&
               newPasswordValue !== '' &&
               confirmPasswordValue !== ''
            ) {
               if (oldPasswordValue !== oldPassword) {
                  setError('Старый пароль не совпадает')
                  return
               } else setError(undefined)

               if (newPasswordValue.length < 6) {
                  setError('Пароль должен быть больше 6 симоволов')
                  return
               } else setError(undefined)

               if (newPasswordValue !== confirmPasswordValue) {
                  setError('Пароли не совпадают')
                  return
               } else setError(undefined)

               await changePassword({ password: newPasswordValue, profileId })
            }
         }

         func()
      }, [
         oldPasswordValue,
         oldPassword,
         newPasswordValue,
         confirmPasswordValue,
         profileId,
      ])

      useEffect(() => {
         if(resultChanged.isError){
            setError('Ошибка. Не удалось изменить пароль')
            return
         }

         if(resultChanged.isSuccess){
            setSuccess('Пароль изменен')
            setOldPassword('')
            setNewPassword('')
            setConfirmPassword('')
         }
      }, [resultChanged])

      return (
         <div style={{ margin }} className={classNames(style.wrap, className)}>
            <Text
               styleText={enumStyleText.SECONDARY_SUBTITLE}
               text="Изменить пароль"
            />
            {error && <Text color="red" text={error} />}
            {success && <Text color="green" text={success} />}
            <div className={style.form}>
               <FieldPassword
                  className={style.input}
                  width="268px"
                  placeholder="Введите старый пароль"
                  styleField={enumStyleField.SECONDARY_LINE}
                  onGetPassword={setOldPassword}
                  password={oldPasswordValue}
               />
               <FieldPassword
                  className={style.input}
                  width="268px"
                  placeholder="Введите новый пароль"
                  styleField={enumStyleField.SECONDARY_LINE}
                  onGetPassword={setNewPassword}
                  password={newPasswordValue}
               />
               <FieldPassword
                  className={style.input}
                  width="268px"
                  placeholder="Повторите новый пароль"
                  styleField={enumStyleField.SECONDARY_LINE}
                  onGetPassword={setConfirmPassword}
                  password={confirmPasswordValue}
               />
            </div>
         </div>
      )
   }
)
