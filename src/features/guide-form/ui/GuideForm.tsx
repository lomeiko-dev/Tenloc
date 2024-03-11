import { memo, useCallback, useState } from 'react'
import style from './GuideForm.module.scss'
import { Field, FieldPhoneMask, enumStyleField } from 'shared/ui/field'
import classNames from 'classnames'
import { Text, enumStyleText } from 'shared/ui/text'
import { Button, enumStyleButton } from 'shared/ui/button'
import { validateEmail } from 'shared/lib/handlers/validateEmail'
import { useAddGuideMutation } from '..'

interface IGuideFormProps {
   className?: string
   margin?: string
}

export const GuideForm: React.FC<IGuideFormProps> = memo((props) => {
   const { className, margin } = props

   const [addGuide] = useAddGuideMutation()

   const [valueName, setValueName] = useState('')
   const [valueSecondName, setValueSecondName] = useState('')
   const [valueEmail, setValueEmail] = useState('')
   const [valuePhone, setValuePhone] = useState('')
   const [valueNameExcursion, setValueNameExcursion] = useState('')
   const [valueDescriptionExcursion, setValueDescriptionExcursion] =
      useState('')

   const [error, setError] = useState<string | undefined>(undefined)
   const [success, setSuccess] = useState<string | undefined>(undefined)

   const submitFormHandle = useCallback(async () => {
      if (valueName === '') {
         setError('Имя не указано')
         return
      } else setError(undefined)

      if (valueSecondName === '') {
         setError('Фамилия не указано')
         return
      } else setError(undefined)

      if (!validateEmail(valueEmail)) {
         setError('Почта указана не коректно')
         return
      } else setError(undefined)

      if (valuePhone === '') {
         setError('Номер телефона не указано')
         return
      } else setError(undefined)

      if (valueNameExcursion === '') {
         setError('Имя экскурсии не указано')
         return
      } else setError(undefined)

      if (valueDescriptionExcursion === '') {
         setError('Описание экскурсии не указано')
         return
      } else setError(undefined)

      const result = await addGuide({
         name: valueName,
         secondaryName: valueSecondName,
         eMail: valueEmail,
         phone: valuePhone,
         nameExcursion: valueNameExcursion,
         descriptionExcursion: valueDescriptionExcursion,
      })

      if(result){
         setSuccess('Заявка отправлена')

         setValueName('')
         setValueSecondName('')
         setValueEmail('')
         setValuePhone('')
         setValueNameExcursion('')
         setValueDescriptionExcursion('')
      }
   }, [valueName, valueSecondName, valueEmail, valuePhone, valueNameExcursion, valueDescriptionExcursion])

   return (
      <div style={{ margin }} className={classNames(style.form, className)}>
         <Text
            styleText={enumStyleText.QUATERNARY_TITLE}
            margin="0 0 55px 0"
            text="Регистрация гида"
         />
         <div className={style.slice}>
            <Field
               value={valueName}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValueName(e.target.value)
               }
               width="384px"
               borderRadius={10}
               height="55px"
               styleField={enumStyleField.SECONDARY}
               placeholder="Имя"
               margin="0 20px 0 0"
            />
            <Field
               value={valueSecondName}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValueSecondName(e.target.value)
               }
               width="384px"
               borderRadius={10}
               height="55px"
               styleField={enumStyleField.SECONDARY}
               placeholder="Фамилия"
            />
         </div>
         <div className={style.slice}>
            <Field
               value={valueEmail}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValueEmail(e.target.value)
               }
               margin="0 20px 0 0"
               width="384px"
               borderRadius={10}
               height="55px"
               styleField={enumStyleField.SECONDARY}
               placeholder="E-mail"
            />
            <FieldPhoneMask
               value={valuePhone}
               onChange={(value) => setValuePhone(value)}
               width="384px"
               height="55px"
               padding="10px 20px"
            />
         </div>
         <Field
            value={valueNameExcursion}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setValueNameExcursion(e.target.value)
            }
            width="100%"
            borderRadius={10}
            height="55px"
            styleField={enumStyleField.SECONDARY}
            placeholder="Название Вашей экскурсии"
         />
         <Field
            value={valueDescriptionExcursion}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setValueDescriptionExcursion(e.target.value)
            }
            width="100%"
            borderRadius={10}
            height="156px"
            isMultiline
            styleField={enumStyleField.SECONDARY}
            placeholder="Описание экскурсии"
         />
         {error && <Text color="red" text={error} />}
         {success && <Text color="green" text={success} />}
         <Button
            borderRadius="10px"
            onClick={submitFormHandle}
            width="280px"
            height="55px"
            styleButton={enumStyleButton.PRIMARY}>
            Отправить заявку
         </Button>
         <Text
            fontSize={13}
            fontWeight={400}
            text="Отправляя заявку, вы принимаете условия."
         />
      </div>
   )
})
