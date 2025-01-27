// Root component for application - Top level component

import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'

function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element = {< HomePage />} />
        <Route  path='/register' element = {< Register />} />
        <Route  path='/login' element = {< Login />} />
        <Route  path='/about' element = {< About />} />
        <Route  path='/contact' element = {< Contact />} />
        <Route  path='/policy' element = {< Policy />} />
        <Route  path='*' element = {< PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

// 1. Defines the structure of application.
// 2. Contains the main logic, routing and layout.
// 3. It returns the JSX
// 4. Container for the other components
// 5. React-based rendering
