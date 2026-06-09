import { useParams } from 'react-router';

const Test = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>ID: {id}</h2>
    </div>
  );
};

export default Test;
