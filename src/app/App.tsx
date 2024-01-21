import "./styles/index.css"
import { Routing } from "./providers/routing"
import { Layout } from "widgets/layout"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useEffect } from "react"
import { loadLikes } from "entities/likes"
import { loadCart } from "entities/cart"

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadLikes());
        dispatch(loadCart());
    }, [dispatch])

    return(
        <div className="app">
            <Layout className="container">
                <Routing/>
            </Layout>
        </div>
    )
}