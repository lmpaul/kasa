import Layout from './components/Layout'
import Home from './components/Home'
import Accomodation from './components/Accomodation'
import About from './components/About'
import Error from './components/Error'

const routerConfig = [
      {
        path: "",
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/accomodation/:id',
            element: <Accomodation />
          },
          {
            path: '/about',
            element: <About />
          },
        ],
        errorElement: <Error/>
      },
    ]

export default routerConfig
