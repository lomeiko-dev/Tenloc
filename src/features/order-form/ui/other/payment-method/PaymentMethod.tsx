import classNames from "classnames";
import style from "./PaymentMethod.module.scss"
import { memo } from "react";
import { Image } from "shared/ui/image";
import { Text } from "shared/ui/text";

interface IPaymentMethodProps{
    name: string,
    logo: string,
    isSelect: boolean,
    onClickMethod: () => void
}

export const PaymentMethod: React.FC<IPaymentMethodProps> = memo((props) => {
    const {
        isSelect,
        logo,
        name,
        onClickMethod
    } = props

    const mods = {[style.active]: isSelect}

    return(
        <div 
            onClick={onClickMethod}
            className={classNames(style.method, mods)}>
            <Image src={logo}/>
            <Text className={style.name} text={name}/>
        </div>
    )
})