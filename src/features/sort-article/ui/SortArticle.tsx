import { memo, useState } from 'react'
import style from './SortArticle.module.scss'
import { Text } from 'shared/ui/text'
import { Dropwdown, enumStyleDropdown } from 'shared/ui/dropdown'

interface ISortArticleProps {
   getSortQuery: (query: string) => void
}

export const SortActicle: React.FC<ISortArticleProps> = memo((props) => {
   const { getSortQuery } = props
   const [selectedSort, setSelectedSort] = useState('По умолчанию')

   return (
      <div className={style.sort}>
         <Text fontSize={15} fontWeight={600} text="Сортировать" />
         <Dropwdown
            styleDropdown={enumStyleDropdown.SECONDARY}
            fontSize={15}
            fontWeight={400}
            content={
               <div className={style.dropdown_wrap}>
                  <span
                     onClick={() => {
                        getSortQuery('')
                        setSelectedSort('По умолчанию')
                     }}
                     className={style.item}>
                     По умолчанию
                  </span>
                  <span
                     onClick={() => {
                        getSortQuery('&_sort=dateCreate')
                        setSelectedSort('Сначала новое')
                     }}
                     className={style.item}>
                     Сначало новое
                  </span>
                  <span
                     onClick={() => {
                        getSortQuery('&_sort=dateCreate&_order=asc')
                        setSelectedSort('Сначала старое')
                     }}
                     className={style.item}>
                     Сначало старое
                  </span>
               </div>
            }>
            {selectedSort}
         </Dropwdown>
      </div>
   )
})
