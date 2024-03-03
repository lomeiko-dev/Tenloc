import style from './ProfilePage.module.scss'
import { AvatarForm, ChangePasswordForm } from 'features/profile-form'
import { ContactForm } from 'features/profile-form/ui/contact-form/ContactForm'

import { TypeNotificationForm } from 'features/profile-form'
import { useAuth } from 'shared/lib/hooks/useAuth'

const ProfilePage = () => {
   const { data: auth } = useAuth()

   if (!auth?.profile || !auth?.user) return null

   return (
      <div className={style.page}>
         <AvatarForm
            profileId={auth?.profile?.id}
            avatar={auth?.profile?.avatar}
            margin="0 60px 0 0"
            width="492px"
            height="496px"
         />
         <div>
            <ContactForm
               profileId={auth?.profile?.id}
               phone={auth?.user.phone}
               email={auth?.user?.email}
            />
            <TypeNotificationForm
               profileId={auth?.profile?.id}
               margin="53px 0 0 0"
               isNotifySMS={auth?.profile?.isNotifySMS}
               isNotifyEmail={auth?.profile?.isNotifyEmail}
            />
            <ChangePasswordForm
               oldPassword={auth.user.password}
               profileId={auth?.profile?.id}
               margin="60px 0 0 0"
            />
         </div>
      </div>
   )
}

export default ProfilePage
