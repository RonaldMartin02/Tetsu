import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing'
import About from './pages/About'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Roster from './pages/Roster'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart'
import Shows from './pages/Shows'

const router = createBrowserRouter(
  [
    { path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing/>,
      },
      {
        path: '/AboutUs',
        element: <About />,
      },
      {
        path: '/Post/:postId',
        element: <Post />,
      },
      {
        path: '/Post/Create',
        element: <CreatePost />,
      },
      {
        path: '/Post/Edit/:postId',
        element: <EditPost />,
      },
      {
        path: '/LogIn',
        element: <LogIn />,
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
      {
        path: '/Roster',
        element: <Roster />,
      },
      {
        path: '/Shop',
        element: <Shop />,
      },
      {
        path: '/Cart',
        element: <Cart />,
      },
      {
        path: '/Shows',
        element: <Shows />,
      },
    ],
    },
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
