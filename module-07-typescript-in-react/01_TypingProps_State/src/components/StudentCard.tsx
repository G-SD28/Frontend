import { useState } from 'react';

type StudentType = {
  name: string;
  age: number;
  city?: string; // optional
};

const StudentCard = () => {
  //   const [student, setStudent] = useState({ name: 'Wei', age: 25 });
  const [student, setStudent] = useState<StudentType>({
    name: 'Wei',
    age: 25,
  });

  const handleUpdate = () => {
    setStudent({ name: 'Wei', age: 26, city: 'Berlin' });
  };

  return (
    <div>
      <p>
        {student.name} is {student.age} years old
      </p>
      {student.city && <p>City: {student.city}</p>}
      <button onClick={handleUpdate}>Update student</button>
    </div>
  );
};

export default StudentCard;
