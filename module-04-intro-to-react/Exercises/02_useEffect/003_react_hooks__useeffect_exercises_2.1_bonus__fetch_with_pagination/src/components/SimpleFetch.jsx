import { useEffect, useState } from 'react';

const SimpleFetch = () => {
  const [url, setUrl] = useState('https://swapi.tech/api/people');
  const [people, setPeople] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error('Fetch failed');
        const data = await res.json();
        setPeople(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const handlePrev = () => setUrl(prevUrl);
  const handleNext = () => setUrl(nextUrl);

  return (
    <main className='min-h-screen bg-gray-900 p-8 font-sans'>
      <div className='flex justify-center gap-4'>
        {prevUrl && (
          <button
            className='mb-2 cursor-pointer rounded bg-white px-4 py-2 text-shadow-gray-900'
            onClick={handlePrev}
          >
            Previous
          </button>
        )}
        {nextUrl && (
          <button
            className='mb-2 cursor-pointer rounded bg-white px-4 py-2 text-shadow-gray-900'
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
      <h1 className='text-center text-3xl font-bold text-gray-300'>Star Wars Characters</h1>
      {loading && <p className='text-center font-medium text-gray-300'>Loading...</p>}
      {error && <p className='text-center font-semibold text-red-500'>{error}</p>}
      <ul className='grid gap-4 sm:grid-cols-2'>
        {people?.map((person) => (
          <li key={person.uid} className='rounded bg-white p-4 text-center capitalize shadow'>
            <span>{person.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default SimpleFetch;
