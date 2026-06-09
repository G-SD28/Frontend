import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import UserDetail from './pages/UserDetail';
import Users from './pages/Users';
import Test from './pages/Test';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />

        {/* <Route path='users/ada-lovelace' element={<h2>Ada's Profile</h2>} />
        <Route path='users/alan-turing' element={<h2>Alan's Profile</h2>} /> */}

        <Route path='users' element={<Users />} />
        <Route path='users/:slug' element={<UserDetail />} />
        <Route path='test/:id' element={<Test />} />

        <Route path=':lang?/categories' element={<Categories />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
