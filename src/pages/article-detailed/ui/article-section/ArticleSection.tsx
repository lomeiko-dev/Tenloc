import { memo } from 'react'
import style from './ArticleSection.module.scss'
import { IBodyArticle } from 'entities/article'
import { Text } from 'shared/ui/text'
import { enumTypeContent } from 'entities/article/model/types'
import { Image } from 'shared/ui/image'

interface IArticleSectionProps extends IBodyArticle {}

export const ArticleSection: React.FC<IArticleSectionProps> = memo((props) => {
   const { content, title, type } = props
   return (
      <div className={style.section}>
         {title && <Text margin='40px 0' fontSize={26} fontWeight={500} text={title} />}

         {type === enumTypeContent.TEXT ? (
            <div className={style.text_block}>
               {content.map((item) => (
                  <Text lineHeight={26} fontSize={16} fontWeight={400} text={item} />
               ))}
            </div>
         ) : (
            <div className={style.image_block}>
               {content.map((item) => (
                  <Image borderRadius={20} width='100%' className={style.image} src={`/server/${item}`} />
               ))}
            </div>
         )}
      </div>
   )
})
