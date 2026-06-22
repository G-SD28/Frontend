export type GreetingsProps = {
  name: string;
};

export type ButtonProps = {
  label: string;
  color?: string;
};

export type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

export enum Role {
  Admin = 'admin',
  Guest = 'guest',
  User = 'user',
}

export type UserCardProps = {
  name: string;
  role: Role;
};

export type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export type Post = {
  id: number;
  title: string;
  body: string;
};
