import React, {
  CSSProperties,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react'
import style from './FormAddReview.module.scss'
import classNames from 'classnames'

import { Field, enumStyleField } from 'shared/ui/field'
import { Button, enumStyleButton } from 'shared/ui/button'
import { ExcursionItem, type IExcursion } from 'entities/excursion'
import { ScoreWriter } from 'shared/ui/score-writer'
import { Text, enumStyleText } from 'shared/ui/text'
import { Loader } from 'shared/ui/loader'

import { useAddNewReviewMutation } from '..'

interface IFormAddReviewProps {
  isSmallMobile?: boolean,
  onCloseModal?: () => void
  valueSearch: string
  onChangeValueSearch: (text: string) => void
  excursions: IExcursion[]
  isErrorExursion?: boolean
  isLoadingExcursion?: boolean
  width?: string
  height?: string
  className?: string
  margin?: string
}

const FormAddReview: React.FC<IFormAddReviewProps> = memo((props) => {
  const {
    isSmallMobile,
    onCloseModal,
    excursions,
    onChangeValueSearch,
    valueSearch,
    isErrorExursion = false,
    isLoadingExcursion = false,
    className,
    height,
    margin,
    width,
  } = props

  const [message, setMessage] = useState('')
  const [score, setScore] = useState(1)
  const [selectId, setId] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [addNewReview, secondaryDataReview] = useAddNewReviewMutation()

  useEffect(() => {
    onChangeValueSearch('')
  }, [])

  const sendReviewHandle = useCallback(async () => {
    if (message.length < 10) {
      setError('Сообщение не может быть меньше 10 символов')
      return
    }

    if (selectId === '') {
      setError('Не вырбана экскурсия')
      return
    }

    await addNewReview({
      message,
      excursionId: selectId,
      score,
    })

    onCloseModal && onCloseModal()
  }, [selectId, message, score])

  const cssStyles: CSSProperties = {
    margin,
    height,
    maxWidth: width,
    width: width ? '100%' : undefined,
  }

  return (
    <div style={cssStyles} className={classNames(style.form, className)}>
      <Text
        margin="20px"
        styleText={enumStyleText.SECONDARY_SUBTITLE}
        text="Оставить отзыв"
      />
      <Field
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChangeValueSearch(e.target.value)
        }}
        value={valueSearch}
        borderRadius={10}
        width="100%"
        height="50px"
        styleField={enumStyleField.SECONDARY}
        placeholder="Найдите экскурсию"
      />

      {error && <Text margin="10px 0 0 0" color="red" text={error} />}

      <div className={style.excursions}>
        {isErrorExursion && <Text text="Ошибка Сервера. Данных нет." />}
        {isLoadingExcursion ? (
          <Loader isCenter />
        ) : (
          excursions.map((item) => (
            <ExcursionItem
              price={isSmallMobile ? undefined : item.priceMiddle}
              imagePreview={item.imagePreview}
              name={item.name}
              onClick={() => {
                setId(item.id)
              }}
              key={item.id}
              className={classNames(
                style.excursion_item,
                item.id === selectId ? style.excursion_item_select : undefined
              )}
            />
          ))
        )}
      </div>
      <div className={style.score_managment}>
        <Text text="Оценка: " />
        <ScoreWriter width="100px" onGetScore={setScore} />
      </div>
      <Field
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setMessage(e.target.value)
        }}
        value={message}
        borderRadius={10}
        height="100px"
        width="100%"
        styleField={enumStyleField.SECONDARY}
        placeholder="Отзыв"
        isMultiline
      />
      <div className={style.submit_wrapper}>
        <Button
          onClick={sendReviewHandle}
          margin="10px 0 0 0"
          className={style.submit}
          styleButton={enumStyleButton.PRIMARY}
        >
          {secondaryDataReview.isLoading ? 'Загрузка...' : 'Отправить отзыв'}
        </Button>
      </div>
    </div>
  )
})

export default FormAddReview
