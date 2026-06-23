import type { MouseEventHandler } from 'react';

const ClickLogger = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('clicked at:', event.clientX, event.clientY);
    console.log('Alt key hold:', event.altKey);
  };

  return <button onClick={handleClick}>CLICK ME!</button>;
};

export default ClickLogger;
