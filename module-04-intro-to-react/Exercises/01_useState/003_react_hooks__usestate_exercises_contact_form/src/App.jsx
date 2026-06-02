// You can work here or download the template
// Your components go here

import { useState } from 'react';

const initalFormState = { name: '', email: '', phone: '+49238746238746', message: 'hallo!' };

const App = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [message, setMessage] = useState('');
  const [formState, setFormState] = useState(initalFormState);

  // function handleChange(e) {
  //   const value = e.target.value;
  //   const field = e.target.name;

  //   const newFormState = { ...formState, [field]: value };
  //   setFormState(newFormState);
  // }

  //   function handleChange(e) {
  //   const { name, value } = e.target;

  //   setFormState((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  function handleChange(e) {
    setFormState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  // console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <div>
      <h1>React: useState</h1>
      <form
        action=''
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' onChange={handleChange} value={formState.name} />

        <label htmlFor='email'>Email</label>
        <input name='email' id='email' onChange={handleChange} value={formState.email} />

        <label htmlFor='phone'>Phone</label>
        <input type='tel' name='phone' id='phone' onChange={handleChange} value={formState.phone} />

        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          id='message'
          onChange={handleChange}
          value={formState.message}
        ></textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
