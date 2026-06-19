// PARTIAL<T>

type User5 = {
  id: number;
  name: string;
  email: string;
};

function updateUser(id: number, newData: Partial<User5>) {
  console.log('updating:', newData);
}

// updateUser(1, { name: 'Vladimir' });
// updateUser(2, { name: 'Jamal', email: 'jamal@example.com' });

// REQUIRED<T>

type Settings = {
  darkMode?: boolean;
  language?: string;
};

function initSettings(config: Required<Settings>) {
  console.log(config.darkMode, config.language);
}

initSettings({ darkMode: true, language: 'en' });
// initSettings({ darkMode: true });

// PICK<T>
type User6 = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type PublicUser = Pick<User6, 'id' | 'name'>;

// OMIT<T>

type SafeUser = Omit<User, 'password'>;
const userSafe: SafeUser = { id: 1, name: 'Mira', email: 'mira@example.com' };

// RECORD => nützlich wenn wir die Keys kennen un den Wert-Typ erzwingen wollen
type Role = 'admin' | 'user' | 'guest';

const access: Record<Role, boolean> = {
  admin: true,
  user: true,
  guest: false,
};
