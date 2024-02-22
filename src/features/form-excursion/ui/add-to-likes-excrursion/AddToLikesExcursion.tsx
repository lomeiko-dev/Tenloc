import { memo, useCallback } from 'react'
import style from './AddToLikesExcursion.module.scss'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'

import { Button } from 'shared/ui/button'

import { excursionIdsSelection, saveLikes, toggleLikeExcursion } from 'entities/likes'
import LikeIcon from 'shared/assets/img/svg-icon/like2.svg?react'
import classNames from 'classnames'

interface IAddToLikesExcursionProps {
  id: string
  isMobile?: boolean
  className?: string,
  margin?: string
}

export const AddToLikesExcursion: React.FC<IAddToLikesExcursionProps> = memo((props) => {
  const {
    id,
    isMobile = false,
    className,
    margin
  } = props

  const dispatch = useAppDispatch()
  const excursionIds = useSelector(excursionIdsSelection)

  const findExcursionById = useCallback(() =>
    excursionIds.find(item => item === id) !== undefined, [id, excursionIds])

  const toggleLikeHamdle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(toggleLikeExcursion(id))
    dispatch(saveLikes())
  }, [id, dispatch])

  return (
        <Button
            style={{margin}}
            onClick={toggleLikeHamdle}
            className={classNames(findExcursionById() ? style.btn_active : style.btn, className)}
            width={isMobile ? '23px' : '50px'} height={isMobile ? '23px' : '45px'}
            padding="5px 0 0 0"
            borderRadius="100px">
                <LikeIcon
                    width={isMobile ? '11px' : '22px'}
                    height={isMobile ? '11px' : '22px'}/>
        </Button>
  )
})
