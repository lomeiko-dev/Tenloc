export interface IReviewProps {
   isMobile: boolean
   className?: string
   description?: string
   isShowTitleBlock?: boolean
   limit?: number
   sortValue?: string
   onOpenModal: () => void
}
