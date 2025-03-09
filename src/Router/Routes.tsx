import { createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Layout/Home/Home'
import Contact from '../Layout/Contact/Contact'
import About from '../Layout/About/About'
import Login from '../Layout/SignUp_SignIn/Login'
import Registration from '../Layout/SignUp_SignIn/Registration'
import PrivateRoute from '../Layout/Provider/PrivateRoute'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'Contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: 'Login',
                element: <Login></Login>
            },
            {
                path: 'About',
                element: <About></About>
            },
            {
                path: 'Registration',
                element: <Registration></Registration>
            },

        ]
    },
])