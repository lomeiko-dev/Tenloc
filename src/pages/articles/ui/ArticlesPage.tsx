import { memo, useState } from 'react'
import style from './ArticlesPage.module.scss'
import { ArticleList } from 'widgets/articles-block'
import { useGetPageArticlesQuery } from 'entities/article'
import { PaginationManagment } from 'shared/ui/pagination-managment'
import { Text, enumStyleText } from 'shared/ui/text'
import { SortActicle } from 'features/sort-article'

const LIMIT = 12

const Articles = memo(() => {
   const [page, setPage] = useState(1)
   const [sortQuery, setSortQuery] = useState('')
   const { data, isLoading, isError } = useGetPageArticlesQuery({
      page,
      limit: LIMIT,
      params: sortQuery,
   })

   const getMaxValuePaginationManagment = () => {
      let value = 0
      if (data?.totalCount) value = data?.totalCount / LIMIT
      if (value % 1 !== 0) return Math.floor(value) + 1
      return Math.floor(value)
   }

   return (
      <div className={style.page}>
         <Text styleText={enumStyleText.SECONDARY_TITLE} text="Блог" />
         <div className={style.subtitle_block}>
            <Text
               margin="25px 0 0 0"
               width="891px"
               styleText={enumStyleText.PRIMARY_TEXT}
               text="платформа простого и надежного онлайн бронирования экскурсий на русском языке по всему миру. Былоснован в 2012 году в Санкт-Петербурге."
            />
            <SortActicle getSortQuery={setSortQuery} />
         </div>
         <ArticleList
            valueSkeletons={12}
            isError={isError}
            isLoading={isLoading}
            articles={data?.articles}
         />
         {data?.totalCount && (
            <div className={style.pagination_wrap}>
               <PaginationManagment
                  margin="97px 0 106px 0"
                  onClick={setPage}
                  maxValue={getMaxValuePaginationManagment()}
               />
            </div>
         )}
      </div>
   )
})

export default Articles
