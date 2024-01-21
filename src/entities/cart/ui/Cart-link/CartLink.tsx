import style from "./CartLink.module.scss"
import classNames from "classnames";

import { Button } from "shared/ui/button"
import { Text } from "shared/ui/text";

import { useNavigate } from "react-router-dom"
import React, { useCallback } from "react";
import { useAppSelector } from "shared/lib/hooks/useAppSelector";

import { pathRoutes } from "shared/config/route-path";
import { cartSelection } from "entities/cart";
import ShopingBagIcon from "shared/assets/img/svg-icon/shopping-bag.svg?react"

interface ICartLinkProps {
    className?: string
    isMobile?: boolean
}

export const CartLink: React.FC<ICartLinkProps> = (props) => {
    const {
        className,
        isMobile = false
    } = props

    const navigate = useNavigate();
    const cart = useAppSelector(cartSelection);

    const navigateHandle = useCallback(() => {
        navigate(pathRoutes.cart.path)
    }, [navigate])

    return(
        <div className={classNames(style.wrapper, className)}>
            <Button
                width={isMobile ? '50px' : '60px'} height={isMobile ? '50px' : '60px'}
                padding="3px 0 0 0"
                className={style.btn}
                onClick={navigateHandle}
                border={isMobile ? '2px solid #fff' : undefined}
                bgColor="#FFD600" HoverBgColor="#FFD60090">
                    <ShopingBagIcon width={isMobile ? '30px' : '50px'}/>
            </Button>
            {!isMobile &&
                <>
                    <Text
                        margin="7px 0 0 0"
                        fontSize={isMobile ? 10 : 13} fontWeight={400} 
                        text="В корзине"/>
                    <Text 
                        fontSize={isMobile ? 10 : 13} fontWeight={600} 
                        text={`${cart.length} экскурсии`}/>
                </>}
        </div>
    )
}