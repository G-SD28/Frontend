import { Link, Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div id='app'>
      <header className='site-header'>
        <Link to='/' className='site-logo'>
          Shop
        </Link>
        <nav className='site-nav'>
          <Link to='/' className='nav-link'>
            Products
          </Link>
          <Link to='/cart' className='nav-link'>
            Cart
          </Link>
        </nav>
      </header>
      <main id='main-content'>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
