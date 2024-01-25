import style from "./Reviews.module.scss"
import { useLazyGetPageReviewQuery } from "entities/reviews"
import { FormAddReviewLazy } from "features/form-add-review"
import { useGetExcursionByNameQuery } from "features/sort-excursion"
import { useState } from "react"
import { Button, enumStyleButton } from "shared/ui/button"
import { Modal } from "shared/ui/modal"
import { Text, enumStyleText } from "shared/ui/text"
import { ReviewSlider } from "widgets/review-slider"

const LIMIT_DESKTOP = 5
const LIMIT_MOBILE = 7

interface IReviewsProps {
    isMobile?: boolean
}

export const Reviews: React.FC<IReviewsProps> = (props) => {
    const {
        isMobile = false
    } = props
    
    const [openModal, setOpenModal] = useState(false)
    const [search, setSearch] = useState('')

    const [triggerReview, resultReview] = useLazyGetPageReviewQuery()
    const {data, isLoading, isError} = useGetExcursionByNameQuery({text: search, page: 1, limit: 20});

    const loadDataHandle = (page: number) => {
        triggerReview({
            page: page, 
            limit: isMobile ? LIMIT_MOBILE : LIMIT_DESKTOP})
    }

    const ReviewSliderComponent =
        <ReviewSlider 
            loadData={loadDataHandle}
            limitDesktop={LIMIT_DESKTOP}
            limitMobile={LIMIT_MOBILE}
            reviews={resultReview.data?.reviews || []}
            isError={resultReview.isError}
            isLoading={resultReview.isLoading}
            isMobile={isMobile}/>

    return( 
        <div className={isMobile ? style.reviews_mobile : style.reviews}>
            <div className={style.left_part}>
                <Text
                    className={style.title}
                    margin="0 0 21px 0"
                    styleText={enumStyleText.TERNARY_TITLE} 
                    text="Отзывы"/>
                {isMobile ?
                    ReviewSliderComponent :
                    <Text
                        width="318px"
                        styleText={enumStyleText.PRIMARY_TEXT}
                        margin="0 0 68px 0"
                        text="Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry"/>}
                <Button
                    onClick={() => setOpenModal(true)}
                    fontSize={15} fontWeight={500}
                    padding={isMobile ? '16px 22px' : '18px 25px'}
                    height="55px" 
                    styleButton={enumStyleButton.PRIMARY}>
                        Оставить отзыв
                </Button>
            </div>
            {!isMobile && ReviewSliderComponent}

            <Modal width="70%" height="700px" onClose={() => setOpenModal(false)} open={openModal}>
                <Text margin="0 0 20px" styleText={enumStyleText.SECONDARY_SUBTITLE} text="Написать отзыв"/>
                <FormAddReviewLazy
                    isLoading={isLoading} isError={isError}
                    onCloseModal={() => setOpenModal(false)}
                    onChangeValueSearch={setSearch}
                    valueSearch={search}
                    excursions={data || []}/>
            </Modal>
        </div>
    )
}