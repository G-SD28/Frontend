import { useState, type ChangeEventHandler } from 'react';

type Course = 'Web Development' | 'Data Science' | 'UX Design';

const courses: Course[] = ['Web Development', 'Data Science', 'UX Design'];

const CourseSelector = () => {
  const [course, setCourse] = useState<Course>('Web Development');

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCourse(e.target.value as Course);
  };

  return (
    <div>
      <label htmlFor='course'>Select your Course:</label>
      <select id='course' value={course} onChange={handleChange}>
        {courses.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <p>You selected: {course}</p>
    </div>
  );
};

export default CourseSelector;
