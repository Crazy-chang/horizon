import { createHashRouter, createBrowserRouter } from 'react-router-dom'

import { Home, Login } from '@/pages'
import { Root, Player } from '@/layouts'

export const router = createHashRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/player',
    element: <Player />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])
