import NavMenu from './NavMenu';

const Sidebar = ({ user }) => {
  return (
    <div style={{ border: '2px solid #ccc', padding: '16px' }}>
      <p>Sidebar</p>
      <NavMenu user={user} />
    </div>
  );
};

export default Sidebar;
