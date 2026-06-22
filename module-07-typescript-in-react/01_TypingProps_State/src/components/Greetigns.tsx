import type { GreetingsProps } from '../types';

// const Greetigns = ({ name }: { name: string }) => {
const Greetigns = ({ name }: GreetingsProps) => {
  return (
    <div>
      <p>Hello, {name.toUpperCase()}</p>
    </div>
  );
};

export default Greetigns;
