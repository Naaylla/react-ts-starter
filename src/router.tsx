import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/layout'

const router = createBrowserRouter([
  //   { path: "/login", element: <Login /> },
  //   { path: "/register", element: <Register /> },
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '', element: <Home /> }],
  },
])

export default function Routes() {
  return <RouterProvider router={router} />
}
