import { createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Layout/Home/Home'
import Contact from '../Layout/Contact/Contact'
import About from '../Layout/About/About'
import SignIn from '../Layout/SignUp_SignIn/SignIn'
import Signup from '../Layout/SignUp_SignIn/Signup'


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
                element: <Contact/>
            },
            {
                path: 'Login',
                element: <SignIn></SignIn>
            },
            {
                path: 'About',
                element: <About></About>
            },
            {
                path: 'Registration',
                element: <Signup></Signup>
            },

        ]
    },
])