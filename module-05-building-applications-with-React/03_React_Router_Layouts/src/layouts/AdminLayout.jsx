import { Link, Outlet, useNavigate } from 'react-router';

const AdminLayout = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside
        style={{
          width: 200,
          backgroundColor: 'gray',
          padding: 16,
          borderRight: '3px solid yellow',
        }}
      >
        <h2>Admin Panel</h2>

        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to='/admin'>Dashboard</Link>
          <Link to='/admin/settings'>Settings</Link>
        </nav>
        <button onClick={() => navigate(-1)}>Go back</button>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
