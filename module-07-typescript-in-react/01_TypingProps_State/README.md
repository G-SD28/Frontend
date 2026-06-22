## Quick Reference

### Typing props

```tsx
// required prop
type GreetingProps = { name: string };
const Greeting = ({ name }: GreetingProps) => <h1>Hello, {name}!</h1>;

// optional + default
type ButtonProps = { label: string; color?: string };
const Button = ({ label, color = 'blue' }: ButtonProps) => ...

// union type — restricts to specific values
type StatusProps = { status: 'loading' | 'success' | 'error' };

// children + optional style
type ContainerProps = { children: React.ReactNode; style?: React.CSSProperties };
```

---

### Typing state

```tsx
// inferred — no annotation needed
const [count, setCount] = useState(0);
const [name, setName] = useState('Alice');
const [isOpen, setIsOpen] = useState(false);

// explicit — needed when initial value is null or complex
const [user, setUser] = useState<string | null>(null);
const [posts, setPosts] = useState<Post[]>([]);
const [error, setError] = useState<string | null>(null);
```

---

### When to annotate state?

| Situation                                                       | Annotate?                             |
| --------------------------------------------------------------- | ------------------------------------- |
| `useState(0)` / `useState('hello')` / `useState(false)`         | ❌ TypeScript infers it               |
| `useState(null)` or `useState(undefined)`                       | ✅ Yes — TS can't infer the full type |
| `useState([])` — array that will hold objects                   | ✅ Yes — TS sees `never[]` otherwise  |
| `useState({ name: 'Ada' })` — object with optional fields later | ✅ Yes — define the type upfront      |
