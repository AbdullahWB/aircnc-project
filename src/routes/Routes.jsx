import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Page/Home/Home'
import Login from '../Page/Login/Login'
import SignUp from '../Page/SignUp/SignUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signUp',
    element: <SignUp />,
  }
])
