import { enumTypeExcursion, markingTypeExcurison } from "entities/excursion";
import { memo } from "react";
import style from "./PrimaryInfo.module.scss"
import { Text, enumStyleText } from "shared/ui/text";

import PeoplesIcon from "shared/assets/img/svg-icon/peoples.svg?react";
import classNames from "classnames";

interface IPrimaryInfoProps {
    className?: string,
    margin?: string
    typeExcursion: enumTypeExcursion,
    time: string,
    sizeGroup: string,
    isFreeCancellation: boolean
}

export const PrimaryInfo: React.FC<IPrimaryInfoProps> = memo((props) => {
    const {
        isFreeCancellation,
        sizeGroup,
        time,
        typeExcursion,
        className,
        margin
    } = props

    return(
        <div style={{margin}} className={classNames(className, style.info_excursion)}>
            <div>
                <PeoplesIcon/>
                <Text
                    className={style.title}
                    styleText={enumStyleText.SECONDARY_TEXT}
                    text={markingTypeExcurison.find(item => item.marking === typeExcursion)?.name || ''}/>
            </div>
            <div>
                <PeoplesIcon/>
                <Text 
                    className={style.title}
                    styleText={enumStyleText.SECONDARY_TEXT}
                    text={time}/>
            </div>
            <div>
                <PeoplesIcon/>
                <Text 
                    className={style.title}
                    styleText={enumStyleText.SECONDARY_TEXT}
                    text={`Размер группы до ${sizeGroup}`}/>
            </div>
            <div>
                <PeoplesIcon/>
                <Text 
                    className={style.title}
                    styleText={enumStyleText.SECONDARY_TEXT}
                    text={isFreeCancellation ? 'Бесплатная отмена за 48 часов' : ''}/>
            </div>
        </div>
    )
})