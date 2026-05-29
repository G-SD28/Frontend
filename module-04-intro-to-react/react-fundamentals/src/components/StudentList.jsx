const StudentList = () => {
  // * JS
  const students = [
    { id: 1, name: 'Nikita', country: 'Germany' },
    { id: 2, name: 'Wei', country: 'China' },
    { id: 8, name: 'Victoria', country: 'Germany' },
    { id: 6, name: 'Jamal', country: 'Germany' },
    { id: 7, name: 'Philipp', country: 'Germany' },
    { id: 9, name: 'Vladimir', country: 'Russia' },
    { id: 5, name: 'Marinel', country: 'Germany' },
    { id: 10, name: 'Mira', country: 'Germany' },
  ];

  // const newArray = [];
  // students.forEach((student) => {
  //   newArray.push(<li>{student.name}</li>);
  // });

  // * JSX
  return (
    <ul>
      {/* {newArray} */}
      {/* {students.map((student) => {
        return (
          <li key={student.id}>
            {student.name} from {student.country}
          </li>
        );
      })} */}
      {students.map(({ id, name, country }) => {
        return (
          <li key={id}>
            {name} from {country}
          </li>
        );
      })}
    </ul>
  );
};
export default StudentList;
