import React from 'react';

const UserAvatar = ({ user }) => {
  return (
    <div style={{ border: '2px solid #ccc', padding: '16px' }}>
      <p>Logged in: {user.name}</p>
    </div>
  );
};

export default UserAvatar;
