import { createHashRouter, createBrowserRouter } from 'react-router-dom'

import { Home, Login, About, Search } from '@/pages'
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
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])
