import "./styles/index.css"
import { Routing } from "./providers/routing"
import { Layout } from "widgets/layout"

export const App = () => {
    return(
        <Layout className="container">
            <Routing/>
        </Layout>
    )
}