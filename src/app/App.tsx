import "./styles/index.css"
import { Routing } from "./providers/routing"
import { Layout } from "widgets/layout"

export const App = () => {
    return(
        <div className="app">
            <Layout className="container">
                <Routing/>
            </Layout>
        </div>
    )
}