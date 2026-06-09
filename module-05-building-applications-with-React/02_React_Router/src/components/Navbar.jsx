import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const styles = ({ isActive }) => ({
    color: isActive ? 'green' : 'black',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <nav style={{ display: 'flex', gap: 16 }}>
      {/* <Link to='/'>HOME</Link> */}
      {/* <Link to='/about'>ABOUT</Link> */}
      {/* <Link to='/contact'>CONTACT</Link> */}

      <NavLink to='/' style={styles}>
        HOME
      </NavLink>

      <NavLink to='/about' style={styles}>
        ABOUT
      </NavLink>

      <NavLink to='/contact' style={styles}>
        CONTACT
      </NavLink>

      <NavLink to='/login' style={styles}>
        LOGIN
      </NavLink>

      <NavLink to='/users' style={styles}>
        USERS
      </NavLink>
      {/* <NavLink
        to='/contact'
        className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
      >
        CONTACT
      </NavLink> */}

      {/* <a href='/'>HOME WITH ANCHOR TAG</a> */}
    </nav>
  );
};

export default Navbar;
