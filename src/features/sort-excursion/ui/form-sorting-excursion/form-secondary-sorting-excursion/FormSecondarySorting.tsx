import { memo, useEffect, useState } from "react"
import style from "../FormSortingExcursion.module.scss"

import { Text } from "shared/ui/text"
import { Field } from "shared/ui/field"

import { GenerateQuerySort } from "../../../model/lib/GenerateQuerySort"
import { markingTypeExcurison, markingTypePay } from "entities/excursion"
import { enumTypeExcursion, enumTypePay } from "entities/excursion"

interface IFormSecondarySortingProps {
    onGetQueryString: (query: string) => void
    isMiddleMobile?: boolean
}

const FormSecondarySorting: React.FC<IFormSecondarySortingProps> = memo((props) => {
    const {
        onGetQueryString,
        isMiddleMobile
    } = props

    const [date, setDate] = useState<string>('')

    const [primaryMoney, setPrimaryMoney] = useState('')
    const [secondaryMoney, setSecondaryMoney] = useState('')

    const [typePay, setTypePay] = useState<string>(enumTypePay.PAY)
    const [typeExcursion, setTypeExcurison] = useState<string>(enumTypeExcursion.INDIVIDUAL)

    useEffect(() => {
        const query = GenerateQuerySort(undefined, date, primaryMoney, secondaryMoney, typeExcursion, typePay)
        if(query) {
            onGetQueryString(query)
        }
    }, [date, primaryMoney, secondaryMoney, typePay, typeExcursion])

    return(
        <div className={style.form_secondary}>
            <div className={style.slice}>
                {!isMiddleMobile &&
                    <Text 
                        margin="0 17px 0 0" 
                        className={style.label} 
                        text="Дата"/>}
                <Field
                    value={date}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setDate(e.target.value)}
                    placeholder={isMiddleMobile ? 'дата' : 'dd.yy'} 
                    width={isMiddleMobile ? '75px' : '91px'} height={isMiddleMobile ? '35px' : '45px'} 
                    className={style.field_wrap}
                    classNameInput={style.field}/>
            </div>
            <div className={style.slice}>
                {!isMiddleMobile &&
                    <Text
                        margin="0 22px 0 0" 
                        className={style.label} 
                        text="Цена"/>}
                <Field
                    value={primaryMoney}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setPrimaryMoney(e.target.value)} 
                    placeholder={isMiddleMobile ? 'цена от' : 'от'}
                    width={isMiddleMobile ? '91px' : '112px'} height={isMiddleMobile ? '35px' : '45px'} 
                    className={style.field_wrap}
                    classNameInput={style.field}/>
                <Text margin="0 7px" text="-"/>
                <Field 
                    value={secondaryMoney}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setSecondaryMoney(e.target.value)}
                    placeholder={isMiddleMobile ? 'цена до' : 'до'}
                    width={isMiddleMobile ? '91px' : '112px'} height={isMiddleMobile ? '35px' : '45px'}
                    className={style.field_wrap}
                    classNameInput={style.field}/>
            </div>
            <div className={style.slice}>
                {!isMiddleMobile &&
                    <Text 
                        margin="0 21px 0 0" 
                        className={style.label} 
                        text="Тип оплаты"/>}
                <Field 
                    isReadOnly
                    getSelection={(_, index) => 
                        setTypePay(markingTypePay[index || 0].marking)}
                    selection={[
                        markingTypePay[0].name,
                        markingTypePay[1].name
                    ]} 
                    height={isMiddleMobile ? '35px' : '45px'} width={isMiddleMobile ? '245px' : '352px'} 
                    classNameInput={style.field} 
                    className={style.field_wrap}
                    value={markingTypePay[0].name}/>
            </div>
            <div className={style.slice}>
                {!isMiddleMobile &&
                    <Text 
                        margin="0 17px 0 0" 
                        className={style.label} 
                        text="Тип экскурсии"/>}
                <Field 
                    isReadOnly
                    getSelection={(_, index) => 
                        setTypeExcurison(markingTypeExcurison[index || 0].marking)}
                    selection={[
                        markingTypeExcurison[0].name,
                        markingTypeExcurison[1].name,
                    ]}
                    height={isMiddleMobile ? '35px' : '45px'} width={isMiddleMobile ? '156px' : '204px'}
                    className={style.field_wrap}
                    classNameInput={style.field} 
                    value={markingTypeExcurison[0].name}/>
            </div>
        </div>
    )
})

export default FormSecondarySorting