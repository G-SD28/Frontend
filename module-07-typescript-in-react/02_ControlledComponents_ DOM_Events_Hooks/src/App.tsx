import ClickLogger from './components/ClickLogger';
import CourseSelector from './components/CourseSelector';
import FormHandler from './components/FormHandler';
import InputLogger from './components/InputLogger';
import NameForm from './components/NameForm';
import TitleUpdater from './components/TitleUpdater';

const App = () => {
  // window.addEventListener('click', (event) => {
  //   console.log(event.clientX, event.clientY);
  // });

  // window.addEventListener('keydown', (event) => {
  //   console.log(event.key);
  // });

  return (
    <>
      {/* <NameForm /> */}
      {/* <CourseSelector /> */}
      {/* <ClickLogger /> */}
      {/* <InputLogger /> */}
      {/* <FormHandler /> */}
      <TitleUpdater />

      {/* <button onClick={(e) => console.log(e.clientX, e.clientY)}>
        Click me!
      </button> */}
    </>
  );
};

export default App;
