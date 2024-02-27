export interface IReviewProps {
   isMobile: boolean
   className?: string
   description?: string
   isShowTitleBlock?: boolean
   limit?: number
   sortValue?: string
   errorMessage?: string
   onOpenModal: () => void
}
