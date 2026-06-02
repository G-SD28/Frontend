import Student from './components/Student';

import './index.css';

const studentData = {
  firstName: 'Testy',
  lastName: 'McTest',
  age: 41,
  course: 'Web Development',
  city: 'Berlin',
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
  gpa: 67,
  graduate: true,
};

const App = () => {
  // if (studentData.firstName !== 'Ruby') {
  //   return null;
  // }

  return (
    <>
      <Student {...studentData} />
      {/* {studentData.age >= 18 ? <p>Volljährig</p> : <details>Noch minderjährig</details>} */}
      {/* {studentData.firstName === 'Testy' && <h2>Hallo, Test!</h2>} */}
    </>
  );
};

export default App;
