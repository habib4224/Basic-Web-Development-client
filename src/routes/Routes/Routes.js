import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Cart from "../../Pages/Cart/Cart";
import Detailse from "../../Pages/CourseDetails/Detailes";
import CourseHome from "../../Pages/Courses/CourseHome/CourseHome";
import CoursesDe from "../../Pages/Courses/CoursesDe/CoursesDe";
import CoursesList from "../../Pages/Courses/CoursesList/CoursesList";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Login/Login";
import Registration from "../../Pages/Shared/Registration/Registration";
import PrivetRoute from "../PrivateRoutes/PrivateRoutes";
;

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courselist/:id',
                element: <CoursesList></CoursesList>
            },

            {
                path: '/registration',
                element: <Registration></Registration>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/courses/:id',
                element: <CoursesDe></CoursesDe>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <Detailse></Detailse>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)

            },
            {
                path: '/coursedetail/:id',
                element: <CourseHome></CourseHome>

            },
            {
                path: '/cart/:id',
                element: <PrivetRoute><Cart></Cart></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '*',
                element: <div><h1 className='text-center'>!! Page Not Found !!! Please Go Back!!!</h1></div>
            }
        ]
    }
])