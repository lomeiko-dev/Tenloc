import { CSSProperties, memo } from 'react'
import style from './Field.module.scss'
import ReactInputMask from 'react-input-mask'
import classNames from 'classnames'

interface IFieldPhoneMaskProps {
   value: string
   onChange: (value: string) => void
   className?: string
   margin?: string
   width?: string
   height?: string
   fontSize?: string
   fontWeight?: string
   padding?: string
}

export const FieldPhoneMask: React.FC<IFieldPhoneMaskProps> = memo((props) => {
   const {
      value,
      onChange,
      className,
      margin,
      width,
      height,
      fontSize,
      fontWeight,
      padding,
   } = props

   const cssStyle: CSSProperties = {
      margin,
      maxWidth: width,
      width: '100%',
      height,
      fontSize,
      fontWeight,
      padding,
   }

   return (
      <ReactInputMask
         style={cssStyle}
         value={value}
         onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
         }
         mask="+7 (999) 999 - 99 - 99"
         maskChar="_"
         className={classNames(style.input_mask, className)}
         placeholder="Телефон"
      />
   )
})
