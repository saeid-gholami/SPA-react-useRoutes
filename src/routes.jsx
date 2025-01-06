import Home from './components/Home'
import Courses from './components/Courses'
import MainCourse from './components/MainCourse'
import About from './components/About'

let routes = [
    { path: '/', element: <Home /> },
    { path: '/courses', element: <Courses /> },
    { path: '/course/:courseID', element: <MainCourse /> },
    {
        path: '/about', element: <About />, children: [
            { path: 'setting', element: <h3 style={{ textAlign: "center" }}>setting</h3> },
            { path: 'dashboard', element: <h3 style={{ textAlign: "center" }}>dashboard</h3> }
        ]
    },
]

export default routes