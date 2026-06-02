import Grade from './Grade';

const Student = ({ firstName, lastName, picture, age, city, course, gpa, graduate }) => {
  return (
    <article className='card'>
      <img className='card-image' src={picture} alt={`${firstName} ${lastName}`} />
      <div className='card-body'>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Course:</strong> {course}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
        <Grade gpa={gpa} />
      </div>
    </article>
  );
};
export default Student;
