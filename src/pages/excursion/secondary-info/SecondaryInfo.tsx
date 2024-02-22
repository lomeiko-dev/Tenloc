import { memo } from "react";
import style from "./SecondaryInfo.module.scss"
import { Text } from "shared/ui/text";
import classNames from "classnames";

interface ISecondaryInfoProps {
    className?: string,
    margin?: string
    meetingPlace: string,
    terminationPlace: string,
    time: string
}

export const SecondaryInfo: React.FC<ISecondaryInfoProps> = memo((props) => {
    const {
        meetingPlace,
        terminationPlace,
        time,
        className,
        margin
    } = props
    return(
        <div 
            style={{margin}} 
            className={classNames(style.second_info_excursion, className)}>
            <div className={style.second_info_item}>
                <Text fontSize={14} fontWeight={600} text="Место встречи:"/>
                <Text className={style.item_content} lineHeight={24} fontSize={14} fontWeight={400} text={meetingPlace}/>
            </div>
            <div className={style.second_info_item}>
                <Text fontSize={14} fontWeight={600} text="Место окончания:"/>
                <Text className={style.item_content} lineHeight={24} fontSize={14} fontWeight={400} text={terminationPlace}/>
            </div>
            <div className={style.second_info_item}>
                <Text fontSize={14} fontWeight={600} text="Длительность:"/>
                <Text className={style.item_content} lineHeight={24} fontSize={14} fontWeight={400} text={time}/>
            </div>
        </div>
    )
})