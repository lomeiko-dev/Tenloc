import { memo, useCallback, useEffect, useState } from 'react'
import style from './PaginationManagment.module.scss'
import { Button, enumStyleButton } from '../button'
import classNames from 'classnames'

interface IPaginationManagmentProps {
   className?: string
   margin?: string
   maxValue: number
   onClick: (value: number) => void
}

export const PaginationManagment: React.FC<IPaginationManagmentProps> = memo(
   (props) => {
      const { maxValue, onClick, className, margin } = props

      const [values, setValues] = useState<number[]>([])
      const [selectValue, setSelectValue] = useState<number>(1)

      const incrementHandle = useCallback(() => {
         if (selectValue < maxValue) {
            setSelectValue(selectValue + 1)
         }
      }, [selectValue, maxValue])

      const dicrementHandle = useCallback(() => {
        if (selectValue > 1) {
            setSelectValue(selectValue - 1)
        }
      }, [selectValue])

      useEffect(() => {
         const initializeArray = (length: number) => {
            return Array.from({ length }, (_, index) => index + 1)
         }

         setValues(initializeArray(maxValue))
      }, [maxValue])

      useEffect(() => {
         onClick(selectValue)
      }, [values])

      return (
         <div style={{ margin }} className={classNames(style.wrap, className)}>
            <div className={style.arrow_wrap}>
               <div onClick={() => setSelectValue(1)} className={style.arrow}>
                  «
               </div>
               <div
                  onClick={dicrementHandle}
                  className={style.arrow}>
                  ‹
               </div>
            </div>

            <div className={style.inner}>
               <div className={style.values}>
                  {values
                     .slice(selectValue - 1, selectValue - 1 + 3)
                     .map((item) => (
                        <Button
                           color="#1E1E1E"
                           fontSize={13}
                           fontWeight={500}
                           onClick={() => setSelectValue(item)}
                           styleButton={
                              item === selectValue
                                 ? selectValue !== maxValue
                                    ? enumStyleButton.PRIMARY
                                    : undefined
                                 : undefined
                           }
                           width="0">
                           {item}
                        </Button>
                     ))}
               </div>

               <div
                  onClick={() => setSelectValue(selectValue - 1 + 3)}
                  className={style.all}>
                  ...
               </div>

               <Button
                  color="#1E1E1E"
                  fontSize={13}
                  fontWeight={500}
                  onClick={() => setSelectValue(maxValue)}
                  styleButton={
                     maxValue === selectValue
                        ? enumStyleButton.PRIMARY
                        : undefined
                  }
                  width="5px">
                  {maxValue}
               </Button>
            </div>

            <div className={style.arrow_wrap}>
               <div
                  onClick={incrementHandle}
                  className={style.arrow}>
                  ›
               </div>
               <div
                  onClick={() => setSelectValue(maxValue)}
                  className={style.arrow}>
                  »
               </div>
            </div>
         </div>
      )
   }
)
