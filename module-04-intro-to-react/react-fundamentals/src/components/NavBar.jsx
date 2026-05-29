function NavBar({ title, user }) {
  // const title = props.title;
  // const { title } = props;
  // console.log(title);

  return (
    // <nav style={{ backgroundColor: 'red', color: 'white' }}>
    // <nav className='navbar'>
    <nav className='bg-orange-300 p-2'>
      <ul className='flex justify-around font-bold'>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <h2>{title}</h2>
      <p className={user === 'Renke' ? 'bg-red-900' : 'bg-green-500'}>Welcome, {user}</p>
    </nav>
  );
}

export default NavBar;

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// greet('Sebastian');
// greet('Jamal');

// const name = 'Studentname';
// const email = 'Studendname@gmail.com';

// export { name, email };

// diplodocus 🦕
