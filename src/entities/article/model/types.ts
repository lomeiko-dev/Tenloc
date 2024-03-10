export enum enumTypeContent {
   IMAGE = 'image',
   TEXT = 'text',
}
export interface IBodyArticle {
   type: enumTypeContent
   title?: string
   content: string[]
}

export interface IArticle {
   id: string
   preview: string
   title: string
   dateCreate: string
   timeCreate: string
   body: IBodyArticle[]
}
