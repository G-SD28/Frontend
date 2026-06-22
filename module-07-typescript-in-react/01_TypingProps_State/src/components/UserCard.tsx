import type { UserCardProps } from '../types';

const UserCard = ({ name, role }: UserCardProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserCard;
