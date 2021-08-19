import axios from 'axios';
import { useState, useEffect } from 'react';

const PersonsPage = () => {
  const [persons, setPersons] = useState(null);
  const [pageCurrent, setPageCurrent] = useState(
    `https://swapi.dev/api/people/?page=1`,
  );
  const [pagePrev, setPagePrev] = useState(null);
  const [pageNext, setPageNext] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(pageCurrent)
      .then((response) => {
        setPagePrev(response.data.previous);
        setPageNext(response.data.next);
        setPersons(response.data.results);
      })
      .catch((error) => setError(error));
  }, [pageCurrent]);

  if (error) return `Error: ${error.message}`;
  if (!persons) return <div>Loading....</div>;

  const handleNextPage = () => {
    setPageCurrent(pageNext);
  };

  const handlePrevPage = () => {
    setPageCurrent(pagePrev);
  };

  return (
    <div className="bg-gray-800 w-full max-w-screen-xl mx-auto py-10 text-center text-gray-300">
      <div className="grid gap-2 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {persons.map((person) => (
          <li
            key={person.url}
            className="max-w-xs w-full p-4 text-gray-700 bg-white border-2 border-gray-200 rounded-lg shadow-sm"
          >
            {person.name}
          </li>
        ))}
      </div>
      <div className="relative mt-8">
        {pagePrev && (
          <button onClick={handlePrevPage} className="absolute left-10">
            &#60; Previous Page
          </button>
        )}{' '}
        {pageNext && (
          <button onClick={handleNextPage} className="absolute right-10">
            Next Page &#62;
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonsPage;
