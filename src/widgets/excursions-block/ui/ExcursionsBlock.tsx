import { CSSProperties, memo, useCallback, useEffect, useState } from 'react'
import style from './ExcursionsBlock.module.scss'
import classNames from 'classnames'

import { ExcursionList } from './list/ExcursionList'
import { Button, enumStyleButton } from 'shared/ui/button'
import { Text, enumStyleText } from 'shared/ui/text'
import {
   FormSortingExcursion,
   enumTypeFormSortingExcursion,
} from 'features/sort-excursion'
import { CartLinkLazy } from './cart-link'

import { useInView } from 'react-intersection-observer'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import {
   type IExcursion,
   useLazyGetPageExcursionsQuery,
} from 'entities/excursion'

import { cartSelection } from 'entities/cart'
import debounce from 'lodash.debounce'

interface IExcursionListPaginationProps {
   className?: string
   classNameHead?: string
   classNameList?: string
   classNameButton?: string
   isFirstLoading?: boolean
   limit?: number
   isMobile?: boolean
   isMiddleMobile?: boolean
   isDynamicPagination?: boolean
   title?: string
   typeSortingForm?: enumTypeFormSortingExcursion
   baseQueryString?: string
   margin?: string
   width?: string
   height?: string
}

export const ExcursionsBlock: React.FC<IExcursionListPaginationProps> = memo(
   (props) => {
      const {
         className,
         classNameHead,
         classNameList,
         classNameButton,
         limit = 10,
         isMobile,
         isDynamicPagination = false,
         isMiddleMobile,
         typeSortingForm = enumTypeFormSortingExcursion.PRIMARY,
         title,
         baseQueryString = '',
         margin,
         height,
         width,
      } = props

      const [page, setPage] = useState(1)
      const [refObserver, inViewObserver] = useInView()
      const [isActiveDynamic, setActiveDynamic] = useState(false)
      const [querySort, setQuerySort] = useState<string>('')
      const [isShowList, setShowList] = useState(false)

      const [triggerExcursion, resultExcursion] =
         useLazyGetPageExcursionsQuery()
      const [excursions, setExcursion] = useState<IExcursion[]>([])

      const cartExcursions = useAppSelector(cartSelection)

      useEffect(() => {
         if (inViewObserver) {
            getPageExcursions()
         }
      }, [inViewObserver])

      const getPageExcursions = useCallback(
         async (query?: string) => {
            const data = await triggerExcursion({
               page,
               limit,
               params: `${baseQueryString}${query ?? querySort}`,
            }).unwrap()

            setExcursion((prev) => [...prev, ...(data?.excursions || [])])
            setPage((prev) => (prev += 1))

            if (!isShowList) setShowList(true)
         },
         [querySort, page, baseQueryString]
      )

      const setQuerySortHandle = useCallback(
         debounce((query: string) => {
            setQuerySort(query)

            setPage(1)
            setExcursion([])
            getPageExcursions(query)
         }, 300),
         []
      )

      const showMoreHandle = useCallback(() => {
         getPageExcursions()
         setTimeout(() => {
            setActiveDynamic(true)
         }, 200)
      }, [page])

      const cssStyle: CSSProperties = {
         margin,
         height,
         maxWidth: width,
         width: width ? '100%' : undefined,
      }

      return (
         <div style={cssStyle} className={className}>
            <div className={classNames(style.head, classNameHead)}>
               {title && (
                  <Text
                     className={style.title}
                     styleText={enumStyleText.TERNARY_TITLE}
                     text={title}
                  />
               )}
               <FormSortingExcursion
                  width="100%"
                  isMiddleMobile={isMiddleMobile}
                  isMobile={isMobile}
                  typeFormSortingExcursion={typeSortingForm}
                  onGetQueryString={setQuerySortHandle}
               />
            </div>

            {isShowList && (
               <ExcursionList
                  className={classNameList}
                  isMobile={isMobile}
                  data={excursions}
                  isError={resultExcursion.isError}
                  isLoading={resultExcursion.isLoading}
                  valueSkeletons={limit}
               />
            )}
            <div className={classNames(style.btn_block, classNameButton)}>
               {isDynamicPagination ? (
                  !isActiveDynamic ? (
                     (resultExcursion.data?.totalCount || 0) > limit && (
                        <Button
                           fontSize={15}
                           fontWeight={400}
                           height="55px"
                           onClick={showMoreHandle}
                           styleButton={enumStyleButton.PRIMARY}>
                           Все экскурсии
                        </Button>
                     )
                  ) : (
                     <div ref={refObserver} />
                  )
               ) : (
                  (resultExcursion.data?.totalCount || 0) > limit && (
                     <Button
                        onClick={() => getPageExcursions()}
                        fontSize={15}
                        fontWeight={400}
                        borderRadius="100px"
                        width="200px"
                        height="55px"
                        padding="18px 33px"
                        border="1px dashed #BABABA">
                        Загзурить еще
                     </Button>
                  )
               )}
            </div>
            {cartExcursions.length !== 0 && (
               <CartLinkLazy
                  isMobile={isMobile}
                  excursionCount={cartExcursions.length}
               />
            )}
         </div>
      )
   }
)
