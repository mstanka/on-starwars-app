import axios from 'axios';
import { useState, useEffect } from 'react';

const Person = ({ url, name, gender, birth, homeworld, starships }) => {
  const [homeworldName, setHomeWorldName] = useState(null);
  // const [starshipsName, setStarshipsName] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(homeworld)
      .then((response) => setHomeWorldName(response.data.name))
      .catch((error) => setError(error));
  }, [homeworld]);

  // useEffect(() => {
  //   if (starships === null) return;

  //   starships.forEach((ship) => {
  //     axios
  //       .get(ship)
  //       .then((response) => {
  //         setStarshipsName(...starshipsName, response.data.name);
  //       })
  //       .catch((error) => setError(error));
  //   });
  // }, [starships, starshipsName]);

  if (error) return `Error: ${error.message}`;
  if (!homeworldName) return <div>Loading....</div>;
  // if (!starshipsName) return <div>Loading....</div>;

  return (
    <li
      key={url}
      className="max-w-xs w-full p-4 text-gray-700 bg-white border-2 border-gray-200 rounded-lg shadow-sm list-none"
    >
      <p className="font-bold text-2xl text-green-800 pb-4 border-b-2 mb-2">
        {name}
      </p>
      <p>
        Gender: <span className="font-bold"> {gender}</span>
      </p>
      <p>
        BirthYear: <span className="font-bold"> {birth} </span>
      </p>
      <p>
        Homeworld: <span className="font-bold">{homeworldName}</span>
      </p>
      <p>Starships:</p>
      <ul>
        {starships.map((ship, i) => (
          <li key={i} className="font-bold">
            {ship}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Person;
