import {
   CSSProperties,
   ChangeEvent,
   memo,
   useCallback,
   useEffect,
   useRef,
   useState,
} from 'react'
import style from './AvatarForm.module.scss'
import { Image } from 'shared/ui/image'

import userImage from 'shared/assets/img/other/user.png'
import AddIcon from 'shared/assets/img/svg-icon/add.svg?react'
import classNames from 'classnames'
import { Button } from 'shared/ui/button'
import { useChangeAvatarMutation } from 'features/profile-form'

interface IAvatarFormProps {
   profileId: string
   avatar?: string
   className?: string
   margin?: string
   width?: string
   height?: string
}

export const AvatarForm: React.FC<IAvatarFormProps> = memo((props) => {
   const { avatar, className, margin, width, height, profileId } = props

   const [avatarImg, setAvatar] = useState<string | undefined>(undefined)
   const fileInputRef = useRef<HTMLInputElement>(null)
   const [changeAvatar] = useChangeAvatarMutation()

   useEffect(() => {
      setAvatar(avatar)
   }, [avatar])

   const clickOpenFilePickerHandle = useCallback(() => {
      if (fileInputRef.current) fileInputRef.current.click()
   }, [fileInputRef])

   const fileSelectedHandle = (event: ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target.files
      if (fileList && fileList.length > 0) {
         const selectedFile = fileList[0]
         const reader = new FileReader()

         reader.onload = async () => {
            setAvatar(reader.result as string)
            await changeAvatar({
               avatar: reader.result as string,
               profileId,
            })
         }

         reader.readAsDataURL(selectedFile)
      }
   }

   const cssStyle: CSSProperties = {
      width: '100%',
      maxWidth: width,
      height,
      margin,
   }

   return (
      <div style={cssStyle} className={classNames(style.form, className)}>
         <Image width={'100%'} height={'100%'} src={avatarImg || userImage} />
         <input
            onChange={fileSelectedHandle}
            ref={fileInputRef}
            className={style.hide_input}
            type="file"
         />
         <Button onClick={clickOpenFilePickerHandle} className={style.btn}>
            <AddIcon width={75} height={75} />
         </Button>
      </div>
   )
})
