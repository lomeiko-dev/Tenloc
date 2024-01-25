import React, { memo, useState } from "react"
import { useAddNewReviewMutation } from ".."
import style from "./FormAddReview.module.scss"
import classNames from "classnames"

import { Field, enumStyleField } from "shared/ui/field"
import { Button, enumStyleButton } from "shared/ui/button"
import { ExcursionItem, IExcursion } from "entities/excursion"
import { ErrorMessage } from "shared/ui/error-message"
import { ScoreWriter } from "shared/ui/score-writer"
import { Text } from "shared/ui/text"
import { Loader } from "shared/ui/loader"

interface IFormAddReviewProps {
    onCloseModal?: () => void,
    valueSearch: string,
    onChangeValueSearch: (text: string) => void,
    excursions: IExcursion[],
    isError?: boolean,
    isLoading?: boolean,
}

const FormAddReview: React.FC<IFormAddReviewProps> = memo((props) => {
    const {
        onCloseModal,
        excursions,
        onChangeValueSearch,
        valueSearch,
        isError = false,
        isLoading = false
    } = props

    const [message, setMessage] = useState('')
    const [selectId, setId] = useState('');
    const [addNewReview, secondaryDataReview] = useAddNewReviewMutation()

    const [isThisError, setError] = useState(secondaryDataReview.isError)
    const [errorMessage, setErrorMessage] = useState('')

    const sendReviewHandle = async () => {
        if(message.length < 10){
            setErrorMessage('Отзыв не может быть отправлен в связи с малым количеством символов')
            setError(true)
            return
        }

        if(selectId === ''){
            setErrorMessage('Отзыв не может быть отправлен в связи с не выбранной экскурсией')
            setError(true)
            return
        }

        await addNewReview({
            message: message, 
            excursionId: selectId, 
            score: 4})

        onCloseModal && onCloseModal();
    }

    if(isThisError)
        return
            <ErrorMessage 
                onDeleteMessage={() => {
                    setError(false)
                    setErrorMessage('')
                }} 
                message={errorMessage === '' ? 
                    "Возникла ошибка при отправки отзыва. Попробуйте позже." : 
                    errorMessage}/>

    return(
        <div className={style.form}>
            <Field 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeValueSearch(e.target.value)}
                value={valueSearch}
                borderRadius={10}
                height="50px"
                styleField={enumStyleField.SECONDARY} 
                placeholder="Найдите экскурсию"/>
            <div className={style.excursions}>
                {isError &&
                    <Text text="Экскурсий не найдено."/>}
                {isLoading ?
                    <Loader isCenter/> :
                    excursions.map(item =>
                        <div key={item.id} onClick={() => setId(item.id)}>
                            <ExcursionItem 
                                className={classNames(
                                    style.excursion_item, 
                                    item.id === selectId ? style.excursion_item_select : undefined)}
                                description={item.description} 
                                image={item.imagePreview}
                                name={item.name}
                                price={item.priceMiddle}/>
                        </div>
                    )}
            </div>
            <div className={style.score_managment}>
                <Text text="Оценка: "/>
                <ScoreWriter width="100px" onGetScore={() => null}/>
            </div>
            <Field
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
                    setMessage(e.target.value)}
                value={message}
                borderRadius={10}
                height="100px"
                styleField={enumStyleField.SECONDARY}
                placeholder="Отзыв" 
                isMultiline/>
            <div className={style.submit_wrapper}>
                <Button 
                    onClick={sendReviewHandle}
                    margin="10px 0 0 0" 
                    className={style.submit} 
                    styleButton={enumStyleButton.PRIMARY}>
                        {secondaryDataReview.isLoading ? 'Загрузка...' : 'Отправить отзыв'}
                </Button>
            </div> 
        </div>
    )
})

export default FormAddReview