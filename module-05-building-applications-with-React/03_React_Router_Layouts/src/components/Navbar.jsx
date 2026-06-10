import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const styles = ({ isActive }) => ({
    color: isActive ? 'green' : '#fff',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <nav
      style={{
        display: 'flex',
        gap: 16,
        padding: 16,
        backgroundColor: '#333',
        borderBottom: '3px solid yellow',
      }}
    >
      <NavLink to='/' style={styles}>
        HOME
      </NavLink>

      <NavLink to='/about' style={styles}>
        ABOUT
      </NavLink>

      <NavLink to='/contact' style={styles}>
        CONTACT
      </NavLink>

      <NavLink to='/admin' style={styles}>
        ADMIN
      </NavLink>
    </nav>
  );
};

export default Navbar;
