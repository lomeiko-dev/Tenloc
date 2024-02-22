import { CSSProperties, memo } from "react";
import style from "./Gallery.module.scss"
import { Image } from "shared/ui/image";
import classNames from "classnames";

interface IGalleryProps {
    images: string[],
    width?: string,
    className?: string,
    margin?: string,
    gap?: number
    widthImage?: string,
    heightImage?: string
}

export const Gallery: React.FC<IGalleryProps> = memo((props) => {
    const {
        images,
        heightImage,
        width,
        widthImage,
        className,
        gap,
        margin
    } = props

    const cssStyle: CSSProperties = {
        width: width ? '100%' : undefined,
        maxWidth: width,
        margin,
        gap: `${gap}px`
    } 

    return(
        <div style={cssStyle} className={classNames(style.gallery, className)}>
            {images.map(item => 
                <Image
                    width={widthImage} height={heightImage} 
                    src={`/server/${item}`}/>)}
        </div>
    )
})