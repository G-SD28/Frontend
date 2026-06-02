import Student from './components/Student';

import './index.css';
import students from './data/students';

const App = () => {
  return (
    <div className='container'>
      {students.map((studentin) => (
        <Student key={studentin.id} {...studentin} />
      ))}
    </div>
  );
};

export default App;
