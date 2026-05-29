// function logHello(){
//     console.log("Bye")
// }

// logHello()
// logHello()
// logHello()

// # react component
// * Wird immer in PascalCase geschrieben
const NavBar = () => {
  const navbarText = `Navigation Bar`;

  function displayTest() {
    return `Navigation Bar`;
  }

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  ); // JSX => JavaScript XML
};

// const navBar = document.createElement("nav")
// navBar.textContent = "Navigation Bar"
