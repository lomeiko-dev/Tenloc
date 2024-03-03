import { memo, useCallback, useState } from 'react'
import style from './TypeNotificationForm.module.scss'
import classNames from 'classnames'
import { Text, enumStyleText } from 'shared/ui/text'
import { Checkbox } from 'shared/ui/checkbox'
import { useChangeNotificationMutation } from 'features/profile-form/model/api/profile-api'

interface ITypeNotificationFormProps {
   profileId: string
   isNotifySMS?: boolean
   isNotifyEmail?: boolean
   className?: string
   margin?: string
}

export const TypeNotificationForm: React.FC<ITypeNotificationFormProps> = memo(
   (props) => {
      const {
         isNotifyEmail = false,
         isNotifySMS = false,
         className,
         margin,
         profileId,
      } = props

      const [isCheckedSMS, setIsChecekdSMS] = useState(isNotifySMS)
      const [isCheckedEmail, setIsCheckedEmail] = useState(isNotifyEmail)
      const [changeNotification] = useChangeNotificationMutation()

      const changeNotificationHandle = useCallback(
         async (isEmail: boolean, isSMS: boolean) => {
            await changeNotification({
               isNotifyEmail: isEmail,
               isNotifySMS: isSMS,
               profileId,
            })
         },
         [profileId, isCheckedEmail, isCheckedSMS]
      )

      return (
         <div style={{ margin }} className={classNames(style.wrap, className)}>
            <Text
               styleText={enumStyleText.SECONDARY_SUBTITLE}
               text="Уведомления"
            />
            <div className={style.form}>
               <Checkbox
                  checked={isCheckedEmail}
                  onChecked={() => {
                     setIsCheckedEmail(!isCheckedEmail)
                     changeNotificationHandle(!isCheckedEmail, isCheckedSMS)
                  }}>
                  Электронная почта
               </Checkbox>
               <Checkbox
                  checked={isCheckedSMS}
                  onChecked={() => {
                     console.log("isCheckedSMS", !isCheckedSMS, "isCheckedEmail", isCheckedEmail)
                     setIsChecekdSMS(!isCheckedSMS)
                     changeNotificationHandle(isCheckedEmail, !isCheckedSMS)
                  }}>
                  SMS
               </Checkbox>
            </div>
         </div>
      )
   }
)
