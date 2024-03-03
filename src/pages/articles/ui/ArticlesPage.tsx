import {memo} from 'react'
import style from './ArticlesPage.module.scss'

interface IArticlesProps {

}

const Articles: React.FC<IArticlesProps> = memo((props) => {
    const {} = props
    return(
        <div className={style.page}>
            Component
        </div>
    )
})

export default Articles