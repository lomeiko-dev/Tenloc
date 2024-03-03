import { memo } from 'react'
import style from './ArticlePageDetailed.module.scss'

interface IArticleDetailedProps {}

const ArticleDetailed: React.FC<IArticleDetailedProps> = memo((props) => {
   const {} = props
   return <div className={style.page}>Component</div>
})

export default ArticleDetailed
