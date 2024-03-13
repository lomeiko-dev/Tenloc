import { cartSelection, loadCart, removeToCart, saveCart } from 'entities/cart'
import { ExcursionItem } from 'entities/excursion'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pathRoutes } from 'shared/config/route-path'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { Button } from 'shared/ui/button'
import DecrimentIcon from 'shared/assets/img/svg-icon/decriment.svg?react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

const CartPage = () => {
   const cart = useAppSelector(cartSelection)
   const navigate = useNavigate()
   const dispatch = useAppDispatch()

   useEffect(() => {
      loadCart()
   }, [])

   const removeExcursionHandle = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
         e.stopPropagation()
         dispatch(removeToCart(id))
         dispatch(saveCart())
      },
      [dispatch]
   )

   const clickLinkExcursionHandle = useCallback((id: string) => {
      navigate(pathRoutes.excursion.path + `/${id}`)
   }, [])

   return (
      <div>
         {cart.map((item) => (
            <ExcursionItem
               onClick={() => clickLinkExcursionHandle(item.excursionId)}
               imagePreview={item.previewImage}
               name={item.title}
               date={item.date}
               price={item.price}
               buttonSlot={
                  <Button
                     onClick={(e) => removeExcursionHandle(e, item.excursionId)}
                     width="46px"
                     height="46px"
                     HoverBgColor="#FFD60080"
                     bgColor="#FFD600"
                     padding="3px 0 0 0"
                     borderRadius="100px">
                     <DecrimentIcon />
                  </Button>
               }
            />
         ))}
      </div>
   )
}

export default CartPage
