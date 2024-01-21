import { memo } from "react"
import style from "./AddToLikesExcursion.module.scss"

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useSelector } from "react-redux"

import { Button } from "shared/ui/button"

import { excursionIdsSelection, saveLikes, toggleLikeExcursion } from "entities/likes"
import LikeIcon from "shared/assets/img/svg-icon/like2.svg?react"

interface IAddToLikesExcursionProps {
    id: string,
    isMobile?: boolean,
}

export const AddToLikesExcursion: React.FC<IAddToLikesExcursionProps> = memo((props) => {
    const {
        id,
        isMobile = false
    } = props

    const dispatch = useAppDispatch();
    const excursionIds = useSelector(excursionIdsSelection);

    const findExcursionById = () => 
        excursionIds.find(item => item === id) !== undefined ? true : false

    const toggleLikeHamdle = () => {
        dispatch(toggleLikeExcursion(id));
        dispatch(saveLikes());
    }

    return(
        <Button
            onClick={toggleLikeHamdle}
            className={findExcursionById() ? style.btn_active : style.btn}
            width={isMobile ? '23px' : '50px'} height={isMobile ? '23px' : '50px'}
            padding="5px 0 0 0"
            borderRadius="100px">
                <LikeIcon 
                    width={isMobile ? '11px' : '22px'} 
                    height={isMobile ? '11px' : '22px'}/>
        </Button>
    )
})