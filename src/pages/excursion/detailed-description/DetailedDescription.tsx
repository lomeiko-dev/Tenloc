import classNames from "classnames";
import style from "./DetailedDescription.module.scss"
import { IDescription } from "entities/excursion";
import React, { CSSProperties, memo } from "react";
import { Text, enumStyleText } from "shared/ui/text";

interface IDetailedDescription {
    description: IDescription[]
    margin?: string,
    className?: string,
    width?: string
}

export const DetailedDescription: React.FC<IDetailedDescription> = memo((props) => {
    const {
        description,
        className,
        margin,
        width
    } = props

    const cssStyle: CSSProperties = {
        maxWidth: width,
        width: width ? undefined : '100%',
        margin: margin,
    }

    return(
        <div style={cssStyle} className={classNames(style.description, className)}>
            {description.map(item => 
                <div>
                    <Text styleText={enumStyleText.PRIMARY_SUBTITLE} text={item.title}/>
                    <Text 
                        color="#252525" 
                        lineHeight={33} 
                        styleText={enumStyleText.PRIMARY_TEXT} 
                        margin="14px 0 0 0" text={item.text}/>
                </div>)}
        </div>
    )   
})