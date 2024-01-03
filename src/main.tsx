import ReactDOM from 'react-dom/client'
import {App} from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>
)
