import { useEffect, useState } from 'react';

const Candle = () => {
  const [height, setHeight] = useState(85);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeight((currentHeight) => currentHeight - 10);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const makeCandeSmaller = () => {
    setHeight((h) => h - 1);
  };

  const replaceCandle = () => {
    setHeight(85);
  };

  return (
    <div className='exercise'>
      <button onClick={makeCandeSmaller}>Kerze kleiner machen</button>
      <button onClick={replaceCandle}>Neue Kerze</button>
      <div className='candleContainer'>
        {height > 10 && (
          <div className='candle' style={{ height: `${height}%` }}>
            <div className='flame'>
              <div className='shadows' />
              <div className='top' />
              <div className='middle' />
              <div className='bottom' />
            </div>
            <div className='wick' />
            <div className='wax' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Candle;
