import { useState, type ChangeEventHandler } from 'react';

const NameForm = () => {
  const [name, setName] = useState('');

  //   console.log(name);

  //   const handleChange = (event) => {
  //     setName(event.target.value);
  //   };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          type='text'
          value={name}
          //   onChange={(e) => setName(e.target.value)}
          onChange={handleChange}
        />
      </form>
      {name && <p>Hello, {name}</p>}
      <button onClick={() => setName('')}>Clear</button>
    </>
  );
};

export default NameForm;
