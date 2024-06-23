import { Navigate, createBrowserRouter } from 'react-router-dom'

import Layout from 'layout/index'
import NotFound from 'pages/NotFound'

import { BASE_URL } from 'shared/config'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/user-list' />,
      },
      {
        path: 'user-list',
        lazy: () => import('pages/UserList'),
      },
      {
        path: 'user/:id',
        lazy: () => import('pages/User'),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes, { basename: BASE_URL })
