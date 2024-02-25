export enum enumNotification {
   EMAIL = 'email',
   SMS = 'sms',
}

export interface IProfile {
   id: string
   avatar: string
   userId: string
   typeNotification: enumNotification
}
