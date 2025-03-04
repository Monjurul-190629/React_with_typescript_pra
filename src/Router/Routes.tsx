import { createBrowserRouter} from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Layout/Home/Home'
import Contact from '../Layout/Contact/Contact'
import About from '../Layout/About/About'


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
                path: 'About',
                element: <About></About>
            }

        ]
    },
])