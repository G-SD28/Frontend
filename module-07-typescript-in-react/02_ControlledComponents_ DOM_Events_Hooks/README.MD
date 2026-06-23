### Controlled Components

```tsx
// controlled input — inline
<input value={name} onChange={(e) => setName(e.target.value)} />;

// controlled input — ausgelagerter Handler
const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  setName(e.target.value);
};

// controlled select
const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
  setCourse(e.target.value as Course);
};
```

---

### DOM Event Types

```tsx
// Click
(event: MouseEvent<HTMLButtonElement>) => void
MouseEventHandler<HTMLButtonElement>

// Input / Select Change
(event: ChangeEvent<HTMLInputElement>) => void
ChangeEventHandler<HTMLInputElement>

// Form Submit
(event: FormEvent<HTMLFormElement>) => void
FormEventHandler<HTMLFormElement>

// Keyboard
(event: KeyboardEvent<HTMLInputElement>) => void
KeyboardEventHandler<HTMLInputElement>
```

---

### Hooks

```tsx
// useState — erkannt
const [count, setCount] = useState(0); // inferred as number
const [name, setName] = useState('Jamal'); // inferred as string

// useState — explizit
const [error, setError] = useState<string | null>(null);
const [user, setUser] = useState<User | null>(null);
const [posts, setPosts] = useState<Post[]>([]);

// useEffect
useEffect(() => {
  if (user) document.title = user.name;
}, [user]);
```
