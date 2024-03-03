import { memo, useCallback, useState } from 'react'
import EyeOpenIcon from 'shared/assets/img/svg-icon/eye-open.svg?react'
import EyeClosedIcon from 'shared/assets/img/svg-icon/eye-closed.svg?react'
import { Field, enumStyleField } from '.'

interface IFieldPasswordProps {
   password: string
   onGetPassword: (password: string) => void
   styleField?: enumStyleField
   placeholder?: string
   margin?: string
   className?: string
   width?: string
   height?: string
}

export const FieldPassword: React.FC<IFieldPasswordProps> = memo((props) => {
   const {
      password,
      onGetPassword,
      placeholder,
      className,
      margin,
      styleField,
      height,
      width,
   } = props

   const [isShowPassword, setShowPassword] = useState(true)

   const toggleVisiblePassowrdHandle = useCallback(() => {
      setShowPassword(!isShowPassword)
   }, [isShowPassword])

   return (
      <Field
         className={className}
         value={password}
         onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onGetPassword(e.target.value)
         }
         type={isShowPassword ? 'text' : 'password'}
         width={width}
         height={height}
         styleField={styleField}
         margin={margin}
         placeholder={placeholder}
         childrenRight={
            !isShowPassword ? (
               <EyeClosedIcon
                  width={30}
                  style={{ cursor: 'pointer' }}
                  onClick={toggleVisiblePassowrdHandle}
               />
            ) : (
               <EyeOpenIcon
                  width={30}
                  style={{ cursor: 'pointer' }}
                  onClick={toggleVisiblePassowrdHandle}
               />
            )
         }
      />
   )
})
