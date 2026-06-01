import Student from './components/Student';

const studentData = {
  id: 1,
  firstName: 'Testy',
  lastName: 'McTest',
  age: 42,
  course: 'Web Development',
  city: 'Berlin',
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
};

const App = () => {
  // const [student, setStudent] = useState(studentData);

  return (
    <>
      {/* * Auch keine Referenz auf das orginal Objekt, sondern Werte einzeln übergeben
      // <Student
      //   firstName={studentData.firstName}
      //   lastName={studentData.lastName}
      //   age={studentData.age}
      //   course={studentData.course}
      //   city={studentData.city}
      //   picture={studentData.picture}
      // />

      {/* * Keine Referenz, sondern eine Kopie */}
      {/* <Student {...studentData} />  */}

      {/* * Ganzes Objekt als Prop */}
      <Student student={studentData} />

      {/* ! Wenn original Objekt in child-component mutiert/verändert werden soll, dann besser das Ganze als State übergeben */}
      {/* <Student student={student} /> */}
    </>
  );
};

export default App;
