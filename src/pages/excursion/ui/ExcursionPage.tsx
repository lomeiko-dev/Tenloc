import style from "./ExcursionPage.module.scss"

import { useGetExcursionByIdQuery } from "features/sort-excursion";
import { useNavigate, useParams } from "react-router-dom"
import { useGetPageExcursionsQuery } from "entities/excursion";

import { Carousel } from "shared/ui/carousel";
import { Image } from "shared/ui/image";
import { Page } from "shared/ui/page"
import { Text, enumStyleText } from "shared/ui/text";
import { DetailedDescription } from "../detailed-description/DetailedDescription";
import { ExcursionList } from "widgets/excursions-block";
import { OrderForm } from "features/order-form";
import { BreadCrumbs } from "shared/ui/bread-crumbs";
import { Gallery } from "../gallery/Gallery";
import { PrimaryInfo } from "../primary-info/PrimaryInfo";
import { SecondaryInfo } from "../secondary-info/SecondaryInfo";
import { pathRoutes } from "shared/config/route-path";
import { useCallback, useEffect, useState } from "react";

const ExcursionPage = () => {
  const {id = ''} = useParams();
  const navigate = useNavigate()
  const [valueSkipPx, setValueSkipPx] = useState(400)
  const {data, isLoading, isError} = useGetExcursionByIdQuery(id);

  const [isMiddleMobile, setMiddleMobile] = useState<boolean | undefined>(undefined)
  const [isMobile, setMobile] = useState<boolean | undefined>(undefined)
  
  const {data: excursions, isLoading: isLoadingExcursions, isError: isErrorExcursion} = useGetPageExcursionsQuery({
    page: 1,
    limit: 4,
    params: `&city_like=${data && data[0].city}`
  })

  const resizeInnerWidthHandle = useCallback(() => {
    window.innerWidth < 970 ? setValueSkipPx(356) : setValueSkipPx(400)
  }, [])

  useEffect(() => {
      resizeInnerWidthHandle()
      window.addEventListener('resize', resizeInnerWidthHandle)

      return () => {
        window.removeEventListener('resize', resizeInnerWidthHandle)
      }
  }, [window])

  useEffect(() => {
    if(data && data.length === 0 && !isLoading)
      navigate(pathRoutes.notfound.path)
  }, [data])

  if(isError)
      navigate(pathRoutes.internal_server_error.path)

  if(data === undefined)
    return null

  return (
    <Page 
      onSetIsMiddleMobile={setMiddleMobile}  onSetIsMobile={setMobile}
      className={style.page} 
      padding="20px 0 0 0">
        <BreadCrumbs
          fontSize={12} fontWeight={400}
          width="fit-content" 
          values={[
            {value: data[0].country, color: '#252525'},
            {value: data[0].city, color: '#252525'},
            {value: data[0].name, color: '#A1A1A1'},
          ]}/>
        <div className={style.head}>
          <Text 
            width="940px" 
            styleText={isMiddleMobile ? enumStyleText.QUATERNARY_SUBTITLE : enumStyleText.QUATERNARY_TITLE} 
            text={data[0].name}/>
          <div className={style.price}>
            <Text className={style.price_value} color='#252525' fontSize={isMiddleMobile ? 14 : 29} fontWeight={700} text={`от ${data[0].priceMiddle} ₽`}/>
            <Text className={style.price_title} color="#828282" fontSize={isMiddleMobile ? 13 : 15} fontWeight={400} text="за человека"/>
          </div>
        </div>
        <Carousel 
          margin="49px 0 0 0" 
          positionPx={isMobile ? 0 : -150} valueSkipPx={valueSkipPx} 
          classNameContent={style.carousel_content} className={style.carousel}>
            {data[0].images.map(item => 
              <Image 
                className={style.carousel_image}
                src={`/server/${item}`}/>)}
        </Carousel>
        <div className={style.content}>
          <div className={style.left_part}>
            <Text 
              margin="66px 0 0 0"
              styleText={enumStyleText.PRIMARY_TEXT} 
              width="934px" 
              color="#252525" text={data[0].info}/>
            <PrimaryInfo 
              margin="45px 0 0 0"
              time={data[0].time} typeExcursion={data[0].typeExcursion} 
              isFreeCancellation={data[0].isFreeCancellation} sizeGroup={data[0].sizeGroup}/>
            <DetailedDescription 
              margin="42px 0 0 0" 
              width="952px" 
              description={data[0].detailedDescription}/>
            <div className={style.gallery_block}>
              <Text margin="39px 0" styleText={enumStyleText.SECONDARY_SUBTITLE} text="Галерея"/>
              <Gallery 
                width="960px" gap={26}
                widthImage={isMobile ? '200px' : '300.87px'} 
                heightImage={isMobile ? '160px' : '216px'} 
                images={data[0].gallery}/>
            </div>
            <Text 
              margin="56px 0 0 0"
              width="952px"
              lineHeight={33} styleText={enumStyleText.PRIMARY_TEXT} 
              text={data[0].history}/>
          </div>
          <div className={style.right_part}>
            <OrderForm className={style.order_form} {...data[0]} margin="80px 0 0 0"/>
            <SecondaryInfo 
              className={style.secondary_info}
              time={data[0].time} 
              meetingPlace={data[0].meetingPlace} 
              terminationPlace={data[0].terminationPlace}/>
          </div>
        </div>
        <div className={style.excursion_list}>
          <Text
            margin="0 0 60px 0"
            fontSize={30} fontWeight={600} 
            text="Похожие экскурсии в Санкт-Петербурге"/>
          <ExcursionList
            isMobile={isMobile} valueSkeletons={4}
            isLoading={isLoadingExcursions} isError={isErrorExcursion}
            data={excursions?.excursions || []}/>
        </div>
    </Page>
  )
}

export default ExcursionPage
