import { Image } from "shared/ui/image"
import style from "./ThanksPage.module.scss"
import guideImage from "shared/assets/img/other/guide.png"
import { Text } from "shared/ui/text"

const ThanksPage = () => {
  return (
      <div className={style.page}>
        <Image width="325px" height="325px" src={guideImage}/>
        <Text isCentered 
          width="475px" 
          fontSize={30} fontWeight={700} 
          text="Спасибо, что забронировали экскурсию!"/>
        <Text margin="22px 0 100px 0"
          fontSize={17} fontWeight={400} 
          text="В ближайшее время с Вами свяжется гид."/>
      </div>
  )
}

export default ThanksPage
