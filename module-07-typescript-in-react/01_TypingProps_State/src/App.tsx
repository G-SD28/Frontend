import Button from './components/Button';
import Container from './components/Container';
import Greetigns from './components/Greetigns';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Status from './components/Status';
import StudentCard from './components/StudentCard';
import UserCard from './components/UserCard';
import { Role } from './types';

const App = () => {
  return (
    <>
      <Container style={{ maxWidth: '600px', margin: ' 0 auto' }}>
        <Greetigns name='Someone' />
        {/* <Greetigns name={false} /> */}
        {/* <Greetigns name={10} /> */}

        {/* <Button /> */}
        <Button label='click me' />
        <Button label='submit' color='yellow' />

        <Status status='success' />
        <Status status='error' />
        <Status status='loading' />
        {/* <Status status='something' /> */}

        <UserCard name='someone' role={Role.User} />
        {/* <UserCard name='someone' role='someone' /> */}

        {/* <Container /> */}
        <Profile />
        <StudentCard />
      </Container>

      <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>POSTS</h2>
        <Posts />
      </Container>
    </>
  );
};

export default App;
