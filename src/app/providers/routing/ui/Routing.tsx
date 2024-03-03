import { Suspense } from 'react'
import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { Loader } from 'shared/ui/loader'
import { Routes } from '../lib/Routes'
import { getRequireAuth } from '../lib/RequireAuth'

import { MainPageLazy } from 'pages/main'

const RequireAuth = getRequireAuth(<MainPageLazy />)

export const Routing = () => {
   return (
      <Suspense fallback={<Loader isCenter />}>
         <ReactRoutes>
            {Routes.map((item) => (
               <Route
                  key={item.path}
                  path={item.path}
                  element={
                     item.isAuth ? (
                        <RequireAuth>{item.element}</RequireAuth>
                     ) : (
                        item.element
                     )
                  }
               />
            ))}
         </ReactRoutes>
      </Suspense>
   )
}
