import { calcGrade } from '../utils/utils';

const Grade = ({ gpa }) => {
  const grade = calcGrade(gpa);

  return (
    <p>
      <strong>Grade:</strong> {grade}
    </p>
  );
};
export default Grade;
