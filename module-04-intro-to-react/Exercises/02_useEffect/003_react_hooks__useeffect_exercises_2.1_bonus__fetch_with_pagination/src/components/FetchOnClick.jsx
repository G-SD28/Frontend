import { useEffect, useState } from 'react';

const INITIAL_PEOPLE_URL = 'https://swapi.tech/api/people';

const fetchPeople = async (url, signal) => {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error('Fetch failed');

  return res.json();
};

const FetchOnClick = () => {
  const [people, setPeople] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [status, setStatus] = useState('loading'); // "idle", "loading", "success", "error"

  useEffect(() => {
    const controller = new AbortController();

    // * Initialer Fetch beim Component Mount
    // * Status wechsel von "idle" zu "loading", sobald der erste Fetch startet
    const loadInitialPeople = async () => {
      try {
        setStatus('loading');

        const data = await fetchPeople(INITIAL_PEOPLE_URL, controller.signal);
        setPeople(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setStatus('success');
      } catch (error) {
        if (error.name !== 'AbortError') setStatus('error');
      }
    };

    loadInitialPeople();

    return () => {
      controller.abort();
    };
  }, []);

  // * Event handler rufen den fetch direkt auf.
  const fetchData = async (url) => {
    try {
      setStatus('loading');

      const data = await fetchPeople(url);
      setPeople(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handlePrev = () => fetchData(prevUrl);
  const handleNext = () => fetchData(nextUrl);

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
      {status === 'loading' && <p className='text-center font-medium text-gray-300'>Loading...</p>}
      {status === 'error' && (
        <p className='text-center font-semibold text-red-500'>Sorry, try again :(</p>
      )}
      <ul className='grid gap-4 sm:grid-cols-2'>
        {status === 'success' &&
          people?.map((person) => (
            <li key={person.uid} className='rounded bg-white p-4 text-center capitalize shadow'>
              <span>{person.name}</span>
            </li>
          ))}
      </ul>
    </main>
  );
};
export default FetchOnClick;
