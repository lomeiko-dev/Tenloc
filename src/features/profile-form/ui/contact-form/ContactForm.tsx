import { memo, useCallback, useEffect, useState } from 'react'
import style from './ContactForm.module.scss'
import { Text, enumStyleText } from 'shared/ui/text'
import { Button } from 'shared/ui/button'
import classNames from 'classnames'
import { Field, enumStyleField } from 'shared/ui/field'
import {
   useChangeEmailMutation,
   useChangePhoneMutation,
} from 'features/profile-form/model/api/profile-api'

interface IContactFormProps {
   profileId: string
   email: string
   phone: string
   className?: string
   margin?: string
}

export const ContactForm: React.FC<IContactFormProps> = memo((props) => {
   const { email, phone, className, margin, profileId } = props

   const [isChangedEmail, setIsChangedEmail] = useState(false)
   const [isChangedPhone, setIsChangedPhone] = useState(false)

   const [emailValue, setEmailValue] = useState('')
   const [phoneValue, setPhoneValue] = useState('')

   useEffect(() => {
      setEmailValue(email)
      setPhoneValue(phone)
   }, [email, phone])

   const [changeEmail] = useChangeEmailMutation()
   const [changePhone] = useChangePhoneMutation()

   const applyChangeEmailHandle = useCallback(async () => {
      await changeEmail({ email: emailValue, profileId })
      setIsChangedEmail(false)
   }, [emailValue, profileId])

   const applyChangePhoneHandle = useCallback(async () => {
      await changePhone({ phone: phoneValue, profileId })
      setIsChangedPhone(false)
   }, [phoneValue, profileId])

   return (
      <div style={{ margin }} className={classNames(style.wrap, className)}>
         <Text
            styleText={enumStyleText.SECONDARY_SUBTITLE}
            text="Контактная информация"
         />
         <div className={style.form}>
            <div className={style.slice}>
               <Text fontSize={15} fontWeight={400} text="Электронная почта" />
               <div className={style.right_part}>
                  {isChangedEmail ? (
                     <>
                        <Field
                           value={emailValue}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                              setEmailValue(e.target.value)
                           }
                           placeholder="E-mail"
                           width="135px"
                           styleField={enumStyleField.SECONDARY}
                        />
                        <Button
                           onClick={applyChangeEmailHandle}
                           color="#6A6A6A">
                           применить
                        </Button>
                     </>
                  ) : (
                     <>
                        <Text
                           fontSize={15}
                           fontWeight={500}
                           text={emailValue}
                        />
                        <Button
                           onClick={() => setIsChangedEmail(!isChangedEmail)}
                           color="#6A6A6A">
                           изменить
                        </Button>
                     </>
                  )}
               </div>
            </div>
            <div className={style.slice}>
               <Text fontSize={15} fontWeight={400} text="Контактный телефон" />
               <div className={style.right_part}>
                  {isChangedPhone ? (
                     <>
                        <Field
                           value={phoneValue}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                              setPhoneValue(e.target.value)
                           }
                           placeholder="телефон"
                           width="135px"
                           styleField={enumStyleField.SECONDARY}
                        />
                        <Button
                           onClick={applyChangePhoneHandle}
                           color="#6A6A6A">
                           применить
                        </Button>
                     </>
                  ) : (
                     <>
                        <Text
                           fontSize={15}
                           fontWeight={500}
                           text={phoneValue}
                        />
                        <Button
                           onClick={() => setIsChangedPhone(!isChangedPhone)}
                           color="#6A6A6A">
                           изменить
                        </Button>
                     </>
                  )}
               </div>
            </div>
         </div>
         <Text
            margin="10px 0 0 0"
            fontSize={13}
            fontWeight={400}
            color="#9C9C9C"
            text="Ваша контактная информация показывается только после подтверждения бронирования, чтобы с вами можно было связаться."
         />
      </div>
   )
})
