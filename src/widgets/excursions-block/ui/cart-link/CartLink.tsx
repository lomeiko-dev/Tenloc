import { memo } from 'react'
import { createPortal } from 'react-dom'
import style from './CartLink.module.scss'
import classNames from 'classnames'

import { Text } from 'shared/ui/text'
import { Button } from 'shared/ui/button'

import ShopingBagIcon from 'shared/assets/img/svg-icon/shopping-bag.svg?react'

interface ICartButtonProps {
  excursionCount?: number
  className?: string
  isMobile?: boolean
}

const CartLink: React.FC<ICartButtonProps> = memo((props) => {
  const {
    excursionCount,
    className,
    isMobile = false
  } = props

  return (createPortal(
        <div className={classNames(style.wrapper, className)}>
            <div className={style.link}>
                <Button
                    width={isMobile ? '50px' : '60px'} height={isMobile ? '50px' : '60px'}
                    padding="3px 0 0 0"
                    onClick={() => null}
                    border={isMobile ? '2px solid #fff' : undefined}
                    bgColor="#FFD600" HoverBgColor="#FFD60090">
                        <ShopingBagIcon width={isMobile ? '30px' : '50px'} />
                </Button>
                {!isMobile &&
                    <>
                        <Text
                            margin="7px 0 0 0"
                            fontSize={isMobile ? 10 : 13} fontWeight={400}
                            text="В корзине" />
                        <Text
                            fontSize={isMobile ? 10 : 13} fontWeight={600}
                            text={`${excursionCount} экскурсии`} />
                    </>}
            </div>
        </div>,
        document.body)
  )
})

export default CartLink
