function NavBar({ title, user }) {
  // const title = props.title;
  // const { title } = props;
  // console.log(title);

  return (
    <nav>
      <h2>{title}</h2>
      <p className={user === 'Renke' ? 'bg-red-500' : 'bg-green-500'}>Welcome, {user}</p>
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
