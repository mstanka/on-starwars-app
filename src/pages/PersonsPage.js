import axios from 'axios';
import { useState, useEffect } from 'react';
import Person from '../components/Person';
import Container from '../layout/Container';
import Spinner from '../components/Spinner';

const PersonsPage = () => {
  const [persons, setPersons] = useState(null);
  const [pageCurrent, setPageCurrent] = useState(
    `https://swapi.py4e.com/api/people/?page=1`,
  );
  const [pagePrev, setPagePrev] = useState(null);
  const [pageNext, setPageNext] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStarships = async (person) => {
      const starshipPromises = person.starships.map((starship) =>
        axios.get(starship),
      );
      const starships = await Promise.all(starshipPromises);
      person.starshipNames = starships.map((starship) => starship.data.name);
    };

    const fetchPersons = async () => {
      try {
        const persons = await axios.get(pageCurrent);
        setPagePrev(persons.data.previous);
        setPageNext(persons.data.next);
        const getStarshipPromises = [];
        for (const person of persons.data.results) {
          if (person.starships) {
            getStarshipPromises.push(getStarships(person));
          } else {
            person.starshipNames = [];
          }
        }
        await Promise.all(getStarshipPromises);
        setPersons(persons.data.results);
      } catch (error) {
        setError(error);
      }
    };
    fetchPersons();
  }, [pageCurrent]);

  if (error) return `Error: ${error.message}`;
  if (!persons) return <Spinner />;

  const handleNextPage = () => {
    setPageCurrent(pageNext);
  };

  const handlePrevPage = () => {
    setPageCurrent(pagePrev);
  };

  return (
    <Container>
      <div className="grid gap-2 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {persons.map((person) => (
          <Person
            key={person.url}
            url={person.url}
            name={person.name}
            gender={person.gender}
            birth={person.birth_year}
            homeworld={person.homeworld}
            starships={person.starshipNames}
          />
        ))}
      </div>
      <div className="relative mt-8 border-t pt-4">
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
    </Container>
  );
};

export default PersonsPage;
