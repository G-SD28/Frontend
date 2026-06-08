import UserAvatar from './UserAvatar';

const NavMenu = ({ user }) => {
  return (
    <div style={{ border: '2px solid #ccc', padding: '16px' }}>
      <p>NavMenu</p>
      <UserAvatar user={user} />
    </div>
  );
};

export default NavMenu;
