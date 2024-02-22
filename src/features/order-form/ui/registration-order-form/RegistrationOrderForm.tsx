import React, { memo, useCallback, useEffect, useState } from "react";
import style from "./RegistrationOrderForm.module.scss"

import { Field } from "shared/ui/field";
import { Button, enumStyleButton } from "shared/ui/button";
import { PaymentMethod } from "../other/payment-method/PaymentMethod";
import { Text, enumStyleText } from "shared/ui/text";
import { ExcursionItem, enumTypePay } from "entities/excursion";
import { PriceSlice } from "../other/price-slice/PriceSlice";
import InputMask from 'react-input-mask';

import { IOrder, enumPaymentMethod } from "entities/order";
import { useAddNewOrderMutation } from "../../model/api/add-order-api";

import bankLogotypes from "shared/assets/img/other/bank-logotypes2.png";
import sberLogo from "shared/assets/img/other/sber-logo.png";
import yomoneyLogo from "shared/assets/img/other/yoomoney-logo.png";
import { useNavigate } from "react-router-dom";
import { pathRoutes } from "shared/config/route-path";

interface IRegistrationOrderForm extends 
    Pick<IOrder, 'valueAdult' | 'valuePensioner' | 'valueYouth' | 'valueSmallChildren' | 'valueChildren'> {
    excursionId: string,
    nameExcursion: string,
    imagePrivew: string,
    price: number,
    onCloseModal: () => void
    date: string,
    time: string,
    typePay: enumTypePay
}

const RegistrationOrderForm: React.FC<IRegistrationOrderForm> = memo((props) => {
    const {
        imagePrivew,
        nameExcursion,
        excursionId,
        date,
        time,
        valueAdult,
        valueChildren,
        valuePensioner,
        valueSmallChildren,
        valueYouth,
        price,
        typePay,
        onCloseModal
    } = props

    const [paymentMethod, setPaymentMehod] = useState<enumPaymentMethod>(enumPaymentMethod.BANK)
    const [addOrder, result] = useAddNewOrderMutation()
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
    const [username, setUsername] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if(result.isLoading)
            onCloseModal()
    }, [result.isLoading])

    const addOrderHandle = useCallback(async () => {
        if(username === ''){
            setErrorMessage('Укажите имя')
            return
        }

        if(phoneNumber === ''){
            setErrorMessage('Укажите номер')
            return
        }

        await addOrder({
            date, time,
            name: username, phoneNumber,
            valueAdult, valueChildren, valuePensioner, valueSmallChildren, valueYouth,
            paymentMethod,
            excursionId: excursionId,
            userId: '',
        })

        navigate(pathRoutes.thanks.path)

    }, [date, username, time, phoneNumber, 
        valueYouth, valueAdult, valueChildren, valuePensioner, valueSmallChildren])
    
    return(
        <div className={style.form}>
            <div className={style.title_wrap}>
                <Text styleText={enumStyleText.QUATERNARY_TITLE} text="Оформление заказа"/>
            </div>
                <ExcursionItem
                    date={`${date} | ${time}`}
                    margin="32px 0 0 0"
                    width="100%"
                    imagePreview={imagePrivew} name={nameExcursion} price={price}/>
            <div className={style.payment_block}>
                <Text 
                    fontSize={20} fontWeight={500} 
                    text="Способ оплаты"/>
                <Text 
                    margin="15px 0 0 0"
                    fontWeight={400} fontSize={14} 
                    text="Внесите предоплату. Оставшуюся сумму можно будет заплатить организатору на месте."/>
                <div className={style.payment_methods}>
                    <PaymentMethod 
                        onClickMethod={() => setPaymentMehod(enumPaymentMethod.BANK)}
                        logo={bankLogotypes} name="Банковской картой" 
                        isSelect={enumPaymentMethod.BANK === paymentMethod}/>
                    <PaymentMethod 
                        onClickMethod={() => setPaymentMehod(enumPaymentMethod.SBER)}
                        logo={sberLogo} name="SberPay" 
                        isSelect={enumPaymentMethod.SBER === paymentMethod}/>
                    <PaymentMethod 
                        onClickMethod={() => setPaymentMehod(enumPaymentMethod.YOMONEY)}
                        logo={yomoneyLogo} name="ЮMoney" 
                        isSelect={enumPaymentMethod.YOMONEY === paymentMethod}/>
                </div>
                <div className={style.form_user_data}>
                    <div className={style.part}>
                        <Text fontSize={14} fontWeight={400} text="Как вас зовут"/>
                        <Field 
                            value={username}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setUsername(e.target.value)}
                            margin="8px 0 0 0"
                            padding="14px 10px"
                            placeholder="Введите Ваше Имя"
                            bgColor="#F1F1F1" borderRadius={100} 
                            width="379px" height="55px"/>

                        <Text margin="24px 0 0 0" fontSize={14} fontWeight={400} text="Контактный телефон"/>
                        <InputMask
                            value={phoneNumber}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                setPhoneNumber(e.target.value)}
                            mask='+7 (999) 999 - 99 - 99'
                            maskChar='_'
                            className={style.input}
                            placeholder="+7 (___) ___ - __ - __"
                        />
                        {errorMessage &&
                            <Text color="red" text={errorMessage}/>}
                        <Button 
                            onClick={addOrderHandle}
                            margin="32px 0 0 0"
                            width="379px" height="56px"
                            styleButton={enumStyleButton.PRIMARY}>
                                {result.isLoading ? 
                                    'Загрузка...' :
                                    typePay === enumTypePay.PAY ? 
                                    'Оформить' : `внести предоплату ${price} ₽`}
                        </Button>
                        <Text margin="14px 0 0 40px" fontSize={11} fontWeight={400} text="Оплачивая заказ, Вы соглашаетесь с условиями оферты."/>
                    </div>
                    <div className={style.right_part}>
                        <PriceSlice title="Общая стоимость:" price={price}/>
                        <PriceSlice className={style.second} title="Оплата на месте:" price={typePay === enumTypePay.PAY ? price : 0}/>
                        <PriceSlice className={style.ternary} title="К оплате сейчас:" price={typePay === enumTypePay.PAY ? 0 : price}/>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default RegistrationOrderForm