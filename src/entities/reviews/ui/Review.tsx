import { type CSSProperties, Suspense, memo } from 'react'
import { type IReview } from '..'
import { ReviewDesktopLazy } from './review-desktop'
import { ReviewMobileLazy } from './review-mobile'

interface IReviewProps extends IReview {
   isMobile?: boolean
   className?: string
   width?: string
   height?: string
   margin?: string
}

export const Review: React.FC<IReviewProps> = memo((props) => {
   const {
      avatar,
      cityName,
      excursionId,
      message,
      nickname,
      score,
      className,
      height,
      isMobile,
      margin,
      width,
   } = props

   const cssStyle: CSSProperties = {
      height,
      maxWidth: width,
      width: width ? '100%' : undefined,
      margin,
   }

   return (
      <div style={cssStyle}>
         {!isMobile ? (
            <Suspense>
               <ReviewDesktopLazy
                  className={className}
                  avatar={avatar}
                  nickname={nickname}
                  cityName={cityName}
                  excursionId={excursionId}
                  score={score}
                  message={message}
               />
            </Suspense>
         ) : (
            <Suspense>
               <ReviewMobileLazy
                  className={className}
                  avatar={avatar}
                  nickname={nickname}
                  score={score}
                  message={message}
               />
            </Suspense>
         )}
      </div>
   )
})
