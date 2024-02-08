import { memo } from "react";
import { useGetCityQuery } from "entities/excursion";
import { CitySliderLazy } from "./city-slider";
import { CityListLazy } from "./city-list";

interface ICitiesBlockProps{
    isMobile?: boolean,
    isSlider?: boolean,
    className?: string,
    margin?: string,
    title?: string,
    subTitle?: string
}

export const CitiesBlock: React.FC<ICitiesBlockProps> = memo((props) => {
    const {
        className,
        isMobile = undefined,
        isSlider = false,
        margin,
        subTitle,
        title
    } = props

    const { data = [], isLoading, isError } = useGetCityQuery(isMobile ? 6 : 5)

    return(
        <div style={{margin: margin}} className={className}>
            {isSlider ?
                <CitySliderLazy
                    title={title} subTitle={subTitle}
                    isError={isError} isLoading={isLoading} 
                    cities={data} 
                    isMobile={isMobile}/> :
                <CityListLazy
                    title={title} subTitle={subTitle}
                    isError={isError} isLoading={isLoading} 
                    cities={data} 
                    isMobile={isMobile}/>}
        </div>
    )
})