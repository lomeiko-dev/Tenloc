import { Link } from 'react-router-dom'
import { Image } from '../image'

import logoIcon from 'shared/assets/img/logo/logo.png'
import { pathRoutes } from 'shared/config/route-path'

export const Logotype = () => {
  return (
        <h1>
            <Link to={pathRoutes.main.path}>
                <Image width="128px" src={logoIcon}/>
            </Link>
        </h1>
  )
}
