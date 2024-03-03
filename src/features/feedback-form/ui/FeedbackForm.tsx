import { memo, useCallback, useEffect, useState } from 'react'
import style from './FeedbackForm.module.scss'
import classNames from 'classnames'

import { Text } from 'shared/ui/text'
import { Field, enumStyleField } from 'shared/ui/field'
import { Button, enumStyleButton } from 'shared/ui/button'
import { useSendMessageMutation } from '..'

interface IFeedbackFormProps {
   userId: string
   className?: string
   margin?: string
}

export const FeedbackForm: React.FC<IFeedbackFormProps> = memo((props) => {
   const { className, margin, userId } = props

   const [error, setError] = useState<string | undefined>(undefined)
   const [success, setSuccess] = useState<string | undefined>(undefined)
   const [theme, setTheme] = useState('')
   const [message, setMessage] = useState('')

   const [sendMessage, resultSend] = useSendMessageMutation()

   const sendMessageHandle = useCallback(async () => {
      if (theme === '') {
         setError('Тема не указана')
         return
      } else setError(undefined)

      if (message === '') {
         setError('Сообщение не указано')
         return
      } else setError(undefined)

      await sendMessage({
         message,
         userId,
         theme,
      })
   }, [theme, message, userId])

   useEffect(() => {
      if (resultSend.isError) {
         setError('Ошибка при отправке сообщения')
         return
      }

      if (resultSend.isSuccess) {
         setSuccess('Сообщение отправлено')
         setMessage('')
         setTheme('')
      }
   }, [resultSend])

   return (
      <div style={{ margin }} className={classNames(className, style.form)}>
         {error && <Text margin='0 0 15px 0' color="red" text={error} />}
         {success && <Text margin='0 0 15px 0' color="green" text={success} />}
         <Text fontSize={15} fontWeight={400} text="Тема сообщения" />
         <Field
            value={theme}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setTheme(e.target.value)
            }
            margin="17px 0 0 0"
            fontSize={15}
            fontWeight={400}
            styleField={enumStyleField.SECONDARY}
            height="57px"
            borderRadius={10}
            placeholder="Например: не прошла оплата"
         />
         <Text
            margin="31px 0 0 0"
            fontSize={15}
            fontWeight={400}
            text="Сообщение"
         />
         <Field
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setMessage(e.target.value)
            }
            isMultiline
            margin="17px 0 0 0"
            fontSize={15}
            fontWeight={400}
            styleField={enumStyleField.SECONDARY}
            height="212px"
            padding="10px"
            borderRadius={10}
            placeholder="Опишите вашу проблему"
         />
         <Text
            margin="27px 0 0 0"
            fontSize={13}
            fontWeight={400}
            color="#9A9A9A"
            text="Обычно мы отвечаем в течение 24 часов после обработки запроса."
         />
         <Button
            onClick={sendMessageHandle}
            height="55px"
            width="219px"
            styleButton={enumStyleButton.PRIMARY}
            margin="27px 0 0 0">
            Отправить
         </Button>
      </div>
   )
})
