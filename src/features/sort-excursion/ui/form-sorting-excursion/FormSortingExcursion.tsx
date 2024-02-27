import { CSSProperties, Suspense, memo } from 'react'
import { FormPrimarySortingLazy } from './form-primary-sorting-excursion'
import { FormSecondarySortingLazy } from './form-secondary-sorting-excursion'

export enum enumTypeFormSortingExcursion {
   PRIMARY = 'primary',
   SECONDARY = 'secondary',
}

interface IFormSortingExcursionProps {
   typeFormSortingExcursion?: enumTypeFormSortingExcursion
   className?: string
   width?: string
   height?: string
   margin?: string
   isMobile?: boolean
   isMiddleMobile?: boolean
   onGetQueryString: (query: string) => void
}

export const FormSortingExcursion: React.FC<IFormSortingExcursionProps> = memo(
   (props) => {
      const {
         className,
         height,
         isMiddleMobile,
         isMobile,
         margin,
         typeFormSortingExcursion,
         width,
         onGetQueryString,
      } = props

      const cssStyle: CSSProperties = {
         height,
         maxWidth: width,
         width: width ? '100%' : undefined,
         margin,
      }

      return (
         <div style={cssStyle} className={className}>
            {typeFormSortingExcursion ===
               enumTypeFormSortingExcursion.PRIMARY && (
               <Suspense>
                  <FormPrimarySortingLazy
                     isMobile={isMobile}
                     onGetQueryString={onGetQueryString}
                  />
               </Suspense>
            )}

            {typeFormSortingExcursion ===
               enumTypeFormSortingExcursion.SECONDARY && (
               <Suspense>
                  <FormSecondarySortingLazy
                     onGetQueryString={onGetQueryString}
                     isMiddleMobile={isMiddleMobile}
                  />
               </Suspense>
            )}
         </div>
      )
   }
)
