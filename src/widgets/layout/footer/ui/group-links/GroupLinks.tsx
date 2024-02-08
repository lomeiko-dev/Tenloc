import classNames from 'classnames'
import style from './GroupLinks.module.scss'
import { memo } from 'react'
import { Text, enumStyleText } from 'shared/ui/text'

interface IGroupLinksProps {
  title: string
  children: React.ReactNode
  margin?: string
  className?: string
}

export const GroupLinks: React.FC<IGroupLinksProps> = memo((props) => {
  const {
    children,
    title,
    margin,
    className
  } = props

  return (
        <div style={{ margin }} className={classNames(style.group, className)}>
            <Text margin="0 0 10px 0" styleText={enumStyleText.QUATERNARY_SUBTITLE} text={title}/>
            {children}
        </div>
  )
})
