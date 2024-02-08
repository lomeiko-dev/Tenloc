import { Provider } from 'react-redux'
import { store } from '../lib/store'

interface IStoreProviderProps {
  children: React.ReactNode
}

export const StoreProvider: React.FC<IStoreProviderProps> = ({ children }) => {
  return (
        <Provider store={store}>
            {children}
        </Provider>
  )
}
