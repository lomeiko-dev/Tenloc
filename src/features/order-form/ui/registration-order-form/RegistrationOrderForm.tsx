import React, { memo, useCallback, useEffect, useState } from 'react'
import style from './RegistrationOrderForm.module.scss'

import { PaymentMethod } from '../other/payment-method/PaymentMethod'
import { Text, enumStyleText } from 'shared/ui/text'
import { ExcursionItem, enumTypePay } from 'entities/excursion'
import { PriceSlice } from '../other/price-slice/PriceSlice'
import { IOrder, enumPaymentMethod } from 'entities/order'

import { useAddNewOrderMutation } from '../../model/api/order-api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'shared/lib/hooks/useAuth'

import { pathRoutes } from 'shared/config/route-path'
import { FormUserData } from '../other/form-user-data/FormUserData'

import bankLogotypes from 'shared/assets/img/other/bank-logotypes2.png'
import sberLogo from 'shared/assets/img/other/sber-logo.png'
import yomoneyLogo from 'shared/assets/img/other/yoomoney-logo.png'

interface IRegistrationOrderForm
   extends Pick<
      IOrder,
      | 'valueAdult'
      | 'valuePensioner'
      | 'valueYouth'
      | 'valueSmallChildren'
      | 'valueChildren'
   > {
   excursionId: string
   nameExcursion: string
   imagePreview: string
   city: string,
   price: number,
   date: string,
   onCloseModal: () => void
   time: string
   typePay: enumTypePay
}

const RegistrationOrderForm: React.FC<IRegistrationOrderForm> = memo(
   (props) => {
      const {
         imagePreview,
         nameExcursion,
         excursionId,
         city,
         time,
         date,
         valueAdult,
         valueChildren,
         valuePensioner,
         valueSmallChildren,
         valueYouth,
         price,
         typePay,
         onCloseModal,
      } = props

      const [paymentMethod, setPaymentMehod] = useState(enumPaymentMethod.BANK)
      const [addOrder, result] = useAddNewOrderMutation()
      const navigate = useNavigate()
      const user = useAuth()

      console.log(user.data?.user?.id)

      useEffect(() => {
         if (result.isLoading) onCloseModal()
      }, [result.isLoading])

      const addOrderHandle = useCallback(
         async (username: string, phone: string) => {
            await addOrder({
               price,
               nameExcursion,
               city,
               date,
               time,
               imagePreview,
               name: username,
               phoneNumber: phone,
               valueAdult,
               valueChildren,
               valuePensioner,
               valueSmallChildren,
               valueYouth,
               paymentMethod,
               excursionId: excursionId,
               userId: user.data?.user?.id || '0',
            })

            navigate(pathRoutes.thanks.path)
         },
         [
            time,
            valueYouth,
            date,
            valueAdult,
            valueChildren,
            valuePensioner,
            valueSmallChildren,
            user
         ]
      )

      return (
         <div className={style.form}>
            <div className={style.title_wrap}>
               <Text
                  styleText={enumStyleText.QUATERNARY_TITLE}
                  text="Оформление заказа"
               />
            </div>
            <ExcursionItem
               className={style.excursion}
               date={`${date} | ${time}`}
               margin="24px 0 0 0"
               width="100%"
               imagePreview={imagePreview}
               name={nameExcursion}
               price={price}
            />
            <div className={style.payment_block}>
               <Text margin='0px 0 0 0' fontSize={20} fontWeight={500} text="Способ оплаты" />
               <Text
                  margin="15px 0 0 0"
                  fontWeight={400}
                  fontSize={14}
                  text="Внесите предоплату. Оставшуюся сумму можно будет заплатить организатору на месте."
               />
               <div className={style.payment_methods}>
                  <PaymentMethod
                     onClickMethod={() =>
                        setPaymentMehod(enumPaymentMethod.BANK)
                     }
                     logo={bankLogotypes}
                     name="Банковской картой"
                     isSelect={enumPaymentMethod.BANK === paymentMethod}
                  />
                  <PaymentMethod
                     onClickMethod={() =>
                        setPaymentMehod(enumPaymentMethod.SBER)
                     }
                     logo={sberLogo}
                     name="SberPay"
                     isSelect={enumPaymentMethod.SBER === paymentMethod}
                  />
                  <PaymentMethod
                     onClickMethod={() =>
                        setPaymentMehod(enumPaymentMethod.YOMONEY)
                     }
                     logo={yomoneyLogo}
                     name="ЮMoney"
                     isSelect={enumPaymentMethod.YOMONEY === paymentMethod}
                  />
               </div>
               <div className={style.form_user_data}>
                  <FormUserData
                     onSendForm={addOrderHandle}
                     typePay={typePay}
                     isLoading={result.isLoading}
                     price={price}
                  />
                  <div className={style.right_part}>
                     <PriceSlice title="Общая стоимость:" price={price} />
                     <PriceSlice
                        className={style.second}
                        title="Оплата на месте:"
                        price={typePay === enumTypePay.PAY ? price : 0}
                     />
                     <PriceSlice
                        className={style.ternary}
                        title="К оплате сейчас:"
                        price={typePay === enumTypePay.PAY ? 0 : price}
                     />
                  </div>
               </div>
            </div>
         </div>
      )
   }
)

export default RegistrationOrderForm
