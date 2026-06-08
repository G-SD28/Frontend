import Sidebar from './Sidebar';

const Layout = ({ user }) => {
  return (
    <div style={{ border: '2px solid #ccc', padding: '16px' }}>
      <p>Layout : {user.name}</p>

      <Sidebar user={user} />
    </div>
  );
};

export default Layout;
