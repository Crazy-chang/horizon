import { createHashRouter } from 'react-router-dom'

import { Home, Login, About, Search, Subscription, Favorites } from '@/pages'
import { Root } from '@/layouts'

export const router = createHashRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'subscription',
        element: <Subscription />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])
