import axios from 'axios';
import { useState, useEffect } from 'react';

const PersonsPage = () => {
  const [persons, setPersons] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((response) => setPersons(response.data.results));
  }, [page]);

  if (!persons) return <div>Loading....</div>;

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
    </div>
  );
};

export default PersonsPage;
