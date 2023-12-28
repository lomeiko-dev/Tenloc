import { Button, enumStyleButton } from "shared/ui/button"
import "./styles/index.css"
import { Text, enumStyleText } from "shared/ui/text"
import { Counter } from "shared/ui/counter"
import { Field, enumStyleField } from "shared/ui/field"
import { Modal } from "shared/ui/modal"
import { useState } from "react"
import { Dropwdown, enumStyleDropdown } from "shared/ui/dropdown/Dropdown"
import { Carousel } from "shared/ui/carousel/Carousel"
import { Image } from "shared/ui/image"
import { SliderManagment, enumPositionSliderManagment } from "shared/ui/slider/SliderManagment"

export const App = () => {
    const [open, setOpen] = useState(false);
    return(
        <div className="app container">
            <Dropwdown
                styleDropdown={enumStyleDropdown.PRIMARY}
                content={<>
                    <Button onClick={() => setOpen(true)} width="200px" styleButton={enumStyleButton.PRIMARY}>Кнопка</Button>
                    <Button onClick={() => setOpen(true)} width="200px" styleButton={enumStyleButton.PRIMARY}>Кнопка</Button>
                    <Button onClick={() => setOpen(true)} width="200px" styleButton={enumStyleButton.PRIMARY}>Кнопка</Button>
                </>} >Просмотр</Dropwdown>
            <Button onClick={() => setOpen(true)} width="200px" styleButton={enumStyleButton.PRIMARY}>Кнопка</Button>
            <Button width="40px" height="40px" borderRadius="50%" styleButton={enumStyleButton.PRIMARY}>+</Button>
            <Button width="40px" height="40px" borderRadius="50%" styleButton={enumStyleButton.TERNARY}>+</Button>
            <Button margin="20px" styleButton={enumStyleButton.SECONDARY}>Кнопка</Button>
            <Button styleButton={enumStyleButton.PRIMARY_OUTLINE}>Кнопка</Button>
                    
            <Text styleText={enumStyleText.PRIMARY_TITLE} text="Новый текст"/>
            <Text styleText={enumStyleText.SECONDARY_TITLE} text="Новый текст"/>
            <Text styleText={enumStyleText.TERNARY_TITLE} text="Новый текст"/>
            <Text styleText={enumStyleText.QUATERNARY_TITLE} text="Новый текст"/>
            <Text styleText={enumStyleText.PRIMARY_SUBTITLE} text="Новый текст"/>
            <Text styleText={enumStyleText.SECONDARY_SUBTITLE} text="Новый текст"/>
            <Text styleText={enumStyleText.TERNARY_SUBTITLE} text="Новый текст"/>
            <Text styleText={enumStyleText.QUATERNARY_SUBTITLE} text="Новый текст"/>
            <Text styleText={enumStyleText.PRIMARY_TEXT} text="Новый текст"/>
            <Text styleText={enumStyleText.DESCRIPTION_TEXT} text="Новый текст"/>

            <Counter isNegativeValue setValue={() => null}/>
            <Field isMultiline={true} height="300px" borderRadius={20} placeholder="текст" styleField={enumStyleField.SECONDARY}/>
            <Field isMultiline={true} placeholder="введите текст" styleField={enumStyleField.PRIMARY}/>
            <Field placeholder="введите текст" width="200px" selection={["Москва", "Питер", "Ростов"]} styleField={enumStyleField.SECONDARY_OUTLINE}/>
            <Field placeholder="введите текст" styleField={enumStyleField.SECONDARY_LINE}/>
            <Image width="30px" height="30px" src="https://i.pinimg.com/originals/ab/15/7d/ab157dbcb29cfeaaaccfa6428fc778db.jpg"/>

            <Modal onClose={() => setOpen(false)} open={open}>Откройся сука ты адекватно блять!</Modal>
            <Carousel 
                valueSkipPx={400} 
                content={[
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/ab/15/7d/ab157dbcb29cfeaaaccfa6428fc778db.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/5e/a0/eb/5ea0eb69c6a3b65dafbfefa7e81971b5.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/ab/15/7d/ab157dbcb29cfeaaaccfa6428fc778db.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/5e/a0/eb/5ea0eb69c6a3b65dafbfefa7e81971b5.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/ab/15/7d/ab157dbcb29cfeaaaccfa6428fc778db.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/5e/a0/eb/5ea0eb69c6a3b65dafbfefa7e81971b5.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/ab/15/7d/ab157dbcb29cfeaaaccfa6428fc778db.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/5e/a0/eb/5ea0eb69c6a3b65dafbfefa7e81971b5.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/ab/15/7d/ab157dbcb29cfeaaaccfa6428fc778db.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/5e/a0/eb/5ea0eb69c6a3b65dafbfefa7e81971b5.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/ab/15/7d/ab157dbcb29cfeaaaccfa6428fc778db.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/5e/a0/eb/5ea0eb69c6a3b65dafbfefa7e81971b5.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/5e/a0/eb/5ea0eb69c6a3b65dafbfefa7e81971b5.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/ab/15/7d/ab157dbcb29cfeaaaccfa6428fc778db.jpg"/>,
                    <Image margin="0 2.5px 0 2.5px" width="300px" height="300px" src="https://i.pinimg.com/originals/ab/15/7d/ab157dbcb29cfeaaaccfa6428fc778db.jpg"/>
                ]}/>
                <SliderManagment isButtonSides={true} margin="30px 0 0 0" position={enumPositionSliderManagment.CENTER} isShowViewValue getValue={() => null} maxValue={10}/>
        </div>
    )
}