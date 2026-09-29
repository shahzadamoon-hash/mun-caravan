import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Events from './pages/Events'
import SamarkandICJ from './pages/SamarkandICJ'
import Network from './pages/Network'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'programs', Component: Programs },
      { path: 'events', Component: Events },
      { path: 'events/samarkand-icj', Component: SamarkandICJ },
      { path: 'network', Component: Network },
      { path: 'resources', Component: Resources },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
])
