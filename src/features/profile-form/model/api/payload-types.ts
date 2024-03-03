export interface IChangeAvatarProps {
   avatar: string
   profileId: string
}

export interface IChangeEmailProps {
   email: string
   profileId: string
}

export interface IChangePhoneProps {
   phone: string
   profileId: string
}

export interface IChangeNotificationProps {
   isNotifySMS: boolean
   isNotifyEmail: boolean
   profileId: string
}

export interface IChangePasswordProps {
   password: string
   profileId: string
}
