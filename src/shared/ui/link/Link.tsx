import { memo } from "react";
import style from "./Link.module.scss"
import {LinkProps, Link as ReactLink} from "react-router-dom"

interface ILinkProps extends LinkProps {
    children: React.ReactNode,
}

export const Link: React.FC<ILinkProps> = memo((props) => {
    const {
        children,
        ...otherProps
    } = props;
    
    return(
        <ReactLink 
            className={style.link} 
            {...otherProps}>
                {children}
        </ReactLink>
    )
})