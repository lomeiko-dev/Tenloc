import { memo, useCallback, useState } from 'react'
import { Text } from 'shared/ui/text'
import { Field, FieldPhoneMask } from 'shared/ui/field'
import { Button, enumStyleButton } from 'shared/ui/button'
import { enumTypePay } from 'entities/excursion'

interface IFormUserDataProps {
   onSendForm: (username: string, phone: string) => void
   price: number
   typePay: enumTypePay
   isLoading: boolean
}

export const FormUserData: React.FC<IFormUserDataProps> = memo((props) => {
   const { onSendForm, price, typePay, isLoading } = props

   const [username, setUsername] = useState('')
   const [phone, setPhone] = useState('')
   const [error, setError] = useState<string | undefined>(undefined)

   const onSendFormHandle = useCallback(() => {
      if (username === '') {
         setError('Укажите имя')
         return
      }

      if (phone === '') {
         setError('Укажите номер')
         return
      }

      onSendForm(username, phone)
   }, [username, phone])

   return (
      <div>
         <Text fontSize={14} fontWeight={400} text="Как вас зовут" />
         <Field
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setUsername(e.target.value)
            }
            margin="8px 0 0 0"
            padding="14px 10px"
            placeholder="Введите Ваше Имя"
            bgColor="#F1F1F1"
            borderRadius={100}
            width="379px"
            height="55px"
         />

         <Text
            margin="24px 0 0 0"
            fontSize={14}
            fontWeight={400}
            text="Контактный телефон"
         />
         <FieldPhoneMask
            margin="8px 0 0 0"
            padding="14px 20px"
            value={phone}
            onChange={setPhone}
         />
         {error && <Text color="red" text={error} />}
         <Button
            onClick={onSendFormHandle}
            margin="32px 0 0 0"
            width="379px"
            height="56px"
            styleButton={enumStyleButton.PRIMARY}>
            {isLoading
               ? 'Загрузка...'
               : typePay === enumTypePay.PAY
                 ? 'Оформить'
                 : `внести предоплату ${price} ₽`}
         </Button>
         <Text
            margin="14px 0 0 40px"
            fontSize={11}
            fontWeight={400}
            text="Оплачивая заказ, Вы соглашаетесь с условиями оферты."
         />
      </div>
   )
})
