import { CSSProperties, memo, useCallback, useEffect, useState } from 'react'
import style from './OrderForm.module.scss'
import classNames from 'classnames'

import { Text } from 'shared/ui/text'
import { Field } from 'shared/ui/field'
import { Button, enumStyleButton } from 'shared/ui/button'
import { Modal } from 'shared/ui/modal'
import { RegistrationOderFormLazy } from './registration-order-form'
import { PriceItem } from './other/price-item/PriceItem'

import CalendarIcon from 'shared/assets/img/svg-icon/calendar2.svg?react'
import { IExcursion } from 'entities/excursion'
import { useAuth } from 'shared/lib/hooks/useAuth'

interface IOrderFormProps
   extends Pick<
      IExcursion,
      | 'id'
      | 'dates'
      | 'typePay'
      | 'timeFrame'
      | 'priceAdult'
      | 'pricePensioner'
      | 'priceYouth'
      | 'priceSmallChildren'
      | 'priceChildren'
      | 'name'
      | 'imagePreview'
   > {
   className?: string
   errorAuth?: () => void
   width?: string
   margin?: string
}

export const OrderForm: React.FC<IOrderFormProps> = memo((props) => {
   const {
      id,
      className,
      margin,
      width,
      dates,
      timeFrame,
      priceAdult,
      priceChildren,
      pricePensioner,
      priceSmallChildren,
      priceYouth,
      typePay,
      errorAuth,
      imagePreview,
      name,
   } = props

   const [valueDate, setValueDate] = useState('')
   const [valueTime, setValueTime] = useState('')

   const [valueAdult, setValueAdult] = useState(0)
   const [valuePensioner, setValuePensioner] = useState(0)
   const [valueYouth, setValueYouth] = useState(0)
   const [valueChildren, setValueChildren] = useState(0)
   const [valueSmallChildren, setValueSmallChildren] = useState(0)
   const [resultPrice, setResultPrice] = useState(0)

   const { isAuth } = useAuth()

   const [errorMessage, setErrorMessage] = useState<string | undefined>(
      undefined
   )
   const [isOpenModal, setOpenModal] = useState(false)

   const openModalHandle = useCallback(() => {
      if (!isAuth && errorAuth) {
         errorAuth()
         return
      }
      if (
         valueAdult === 0 &&
         valueChildren === 0 &&
         valuePensioner === 0 &&
         valueYouth === 0 &&
         valueSmallChildren === 0
      ) {
         setErrorMessage('Укажите как минимум одну персону')
         return
      }

      if (valueDate === '') {
         setErrorMessage('Укажите дату')
         return
      }

      if (valueTime === '') {
         setErrorMessage('Укажите время')
         return
      }

      setOpenModal(true)
   }, [
      valueDate,
      valueTime,
      valueAdult,
      valuePensioner,
      valueChildren,
      valueYouth,
      valueSmallChildren,
   ])

   useEffect(() => {
      setResultPrice(
         valueAdult * (priceAdult || 0) +
            valueChildren * (priceChildren || 0) +
            valuePensioner * (pricePensioner || 0) +
            valueYouth * (priceYouth || 0) +
            valueSmallChildren * (priceSmallChildren || 0)
      )
   }, [
      valueAdult,
      valuePensioner,
      valueChildren,
      valueYouth,
      valueSmallChildren,
   ])

   const cssStyle: CSSProperties = {
      margin,
      maxWidth: width,
      width: width ? '100%' : undefined,
   }

   return (
      <div style={cssStyle} className={classNames(style.form, className)}>
         <Text
            fontSize={25}
            fontWeight={700}
            width="211px"
            text="Забронировать экскурсию"
         />
         <Field
            isReadOnly
            padding="0 20px"
            margin="30px 0 0 0"
            height="45px"
            width="100%"
            borderRadius={100}
            bgColor="#F5F5F5"
            getSelection={setValueDate}
            childrenLeft={<CalendarIcon />}
            selection={dates}
            value="Выбрать дату"
         />
         <Field
            isReadOnly
            padding="0 20px 0 7.5px"
            margin="30px 0 0 0"
            height="45px"
            width="100%"
            borderRadius={100}
            bgColor="#F5F5F5"
            getSelection={setValueTime}
            selection={timeFrame}
            value="Выбрать время"
         />

         <div className={style.items}>
            <PriceItem
               onChangeValue={setValueAdult}
               name="Взрослый"
               price={priceAdult}
            />
            <PriceItem
               name="Пенсионер"
               onChangeValue={setValuePensioner}
               price={pricePensioner}
            />
            <PriceItem
               name="Дети с 15 до 18"
               price={priceYouth}
               onChangeValue={setValueYouth}
            />
            <PriceItem
               name="Дети до 14 лет"
               onChangeValue={setValueChildren}
               price={priceChildren}
            />
            <PriceItem
               name="Дети до 7 лет"
               onChangeValue={setValueSmallChildren}
               price={priceSmallChildren}
            />
         </div>
         <div className={style.result}>
            <Text fontSize={14} fontWeight={500} text="Итого" />
            <Text
               color="#454545"
               fontSize={24}
               fontWeight={600}
               text={`${String(resultPrice)} ₽`}
            />
         </div>
         <Button
            margin="29px 0 0 0"
            width="100%"
            height="55px"
            styleButton={enumStyleButton.PRIMARY_OUTLINE}>
            Задать вопрос по экскурсии
         </Button>
         {errorMessage && <Text color="red" text={errorMessage} />}
         <Button
            onClick={openModalHandle}
            margin="15px 0 0 0"
            width="100%"
            height="55px"
            styleButton={enumStyleButton.PRIMARY}>
            Добавить в заказ
         </Button>

         <Modal
            lazy
            width="1075px"
            height="95%"
            maxHeight="1000px"
            open={isOpenModal}
            onClose={() => setOpenModal(false)}>
            <RegistrationOderFormLazy
               imagePrivew={imagePreview}
               nameExcursion={name}
               onCloseModal={() => setOpenModal(false)}
               date={valueDate}
               time={valueTime}
               valueAdult={valueAdult}
               valueChildren={valueChildren}
               valuePensioner={valuePensioner}
               valueSmallChildren={valueSmallChildren}
               valueYouth={valueYouth}
               price={resultPrice}
               typePay={typePay}
               excursionId={id}
            />
         </Modal>
      </div>
   )
})
