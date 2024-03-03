import { memo } from 'react'
import style from './ProfileMenu.module.scss'
import { Dropwdown } from 'shared/ui/dropdown'
import { Image } from 'shared/ui/image'
import { Text } from 'shared/ui/text'
import { Link } from 'shared/ui/link'
import { pathRoutes } from 'shared/config/route-path'
import { Button } from 'shared/ui/button'

interface IProfileMenuProps {
   onLogout: () => void
   avatar: string
   name: string
}

export const ProfileMenu: React.FC<IProfileMenuProps> = memo((props) => {
   const { avatar, name, onLogout } = props

   return (
      <Dropwdown
         content={
            <div className={style.menu}>
               <Link
                  className={style.link}
                  fontSize={15}
                  fontWeight={500}
                  to={pathRoutes.order.path}>
                  {pathRoutes.order.name}
               </Link>
               <Link
                  className={style.link}
                  fontSize={15}
                  fontWeight={500}
                  to={pathRoutes.profile.path}>
                  {pathRoutes.profile.name}
               </Link>
               <Link
                  className={style.link}
                  fontSize={15}
                  fontWeight={500}
                  to={pathRoutes.feedback.path}>
                  {pathRoutes.feedback.name}
               </Link>
               <Button onClick={onLogout} color="red">
                  Выйти
               </Button>
            </div>
         }>
         <Image
            margin="0 10px 0 0"
            width="50px"
            height="50px"
            borderRadius={100}
            src={avatar}
         />
         <Text color="#252525" fontSize={15} fontWeight={400} text={name} />
      </Dropwdown>
   )
})
