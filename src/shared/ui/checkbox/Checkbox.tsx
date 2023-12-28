import { memo, useCallback, useState } from "react";
import style from "./Checkbox.module.scss"
import classNames from "classnames";

interface ICheckboxProps {
    children?: React.ReactNode,
    onChecked: (value: boolean) => void,
    className?: string,
    margin?: string
}

export const Checkbox: React.FC<ICheckboxProps> = memo((props) => {
    const {
        onChecked,
        children,
        className,
        margin
    } = props

    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = useCallback(() => {
        setChecked(!isChecked);
        onChecked(isChecked);
    }, [isChecked]);

    return (
        <label 
          style={{margin: margin}} 
          className={classNames(style.custom_checkbox, className)}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className={style.checkmark}/>
          {children}
        </label>
      );
})