import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('message recived');
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Email' required />
        <br />
        <textarea placeholder='Your message'></textarea>
        <br />
        <button type='submit'>Send</button>
      </form>
    </>
  );
};

export default Contact;
