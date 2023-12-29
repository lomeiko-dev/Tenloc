
const isAuth = true

export const getRequireAuth = (defautlPage: React.ReactNode) => ({children}: {children: React.ReactNode}) => {
    if(!isAuth)
        return defautlPage

    return children
}