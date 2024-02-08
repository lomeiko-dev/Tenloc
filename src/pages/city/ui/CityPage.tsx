import { useEffect, useState } from "react";
import style from "./CityPage.module.scss"
import { enumTypeFormSortingExcursion, useGetCityByNameQuery } from "features/sort-excursion"
import { useNavigate, useParams } from "react-router-dom"

import { pathRoutes } from "shared/config/route-path";
import { Loader } from "shared/ui/loader";
import { Page } from "shared/ui/page";
import { Text, enumStyleText } from "shared/ui/text";
import { CitiesBlock } from "widgets/cities-block";
import { ExcursionsBlock } from "widgets/excursions-block/ui/ExcursionsBlock";
import { ReviewsBlock } from "widgets/reviews-block";

const CityPage = () => {
  const {name = ''} = useParams()
  const navigate = useNavigate();
  const {data = [], isLoading, isError} = useGetCityByNameQuery(name)

  const [isMobile, setMobile] = useState<boolean | undefined>(undefined)
  const [isMiddleMobile, setMiddleMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if(data.length === 0 && !isLoading)
      navigate(pathRoutes.notfound.path)
  }, [data])

  if(isLoading)
    return <Loader isCenter/>
    
  if(isError)
      navigate(pathRoutes.internal_server_error.path)

  if(data.length === 0)
    navigate(pathRoutes.notfound.path)

  return (
        <Page 
          onSetIsMiddleMobile={setMiddleMobile} 
          onSetIsMobile={setMobile}>

          <div className={style.title}>
            <Text 
              styleText={enumStyleText.SECONDARY_TITLE} 
              text={data[0].title}/>
            <Text 
              margin="20px 0 0 0" 
              styleText={enumStyleText.PRIMARY_TEXT} 
              text={data[0].description}/>
          </div>

          <ExcursionsBlock
            classNameHead={style.excrusion_head}
            classNameButton={style.excursion_button}
            baseQueryString={`&city=${name}`}
            isMobile={isMobile} isMiddleMobile={isMiddleMobile}
            typeSortingForm={enumTypeFormSortingExcursion.SECONDARY}/>

          <CitiesBlock
            margin={isMobile ? '66px 0 0 0' : '126px 0 0 0'}
            isSlider isMobile={isMobile}
            title="Популярные направления"
            subTitle="Проводим индивидуальные и групповые экскурсии на русском языке"/>

          <ReviewsBlock
            margin={isMobile ? '65px 0 111px 0' : '125px 0 111px 0'}
            isMobile={isMobile} isShowTitleBlock 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
        </Page>
  )
}

export default CityPage
