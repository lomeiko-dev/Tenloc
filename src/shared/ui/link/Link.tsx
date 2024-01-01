import { memo } from "react";
import style from "./Link.module.scss"
import {LinkProps, Link as ReactLink} from "react-router-dom"
import classNames from "classnames";

interface ILinkProps extends LinkProps {
    children: React.ReactNode,
    className?: string,
    margin?: string,
}

export const Link: React.FC<ILinkProps> = memo((props) => {
    const {
        children,
        className,
        margin,
        ...otherProps
    } = props;
    
    return(
        <ReactLink 
            style={{margin: margin}}
            className={classNames(style.link, className)} 
            {...otherProps}>
                {children}
        </ReactLink>
    )
})