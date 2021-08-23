import axios from 'axios';
import { useState, useEffect } from 'react';
import Vehicle from '../components/Vehicle';
import Container from '../layout/Container';
import Spinner from '../components/Spinner';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState(null);
  const [filteredVehicles, setFilteredVehicles] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageCurrent, setPageCurrent] = useState(
    `https://swapi.dev/api/vehicles/?page=1`,
  );
  const [pagePrev, setPagePrev] = useState(null);
  const [pageNext, setPageNext] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicles = () => {
      axios
        .get(pageCurrent)
        .then((response) => {
          setPagePrev(response.data.previous);
          setPageNext(response.data.next);
          setVehicles(response.data.results);
          setFilteredVehicles(response.data.results);
        })
        .catch((error) => setError(error));
    };
    fetchVehicles();
  }, [pageCurrent]);

  if (error) return `Error: ${error.message}`;
  if (!vehicles || !filteredVehicles) return <Spinner />;

  const handleNextPage = () => {
    setPageCurrent(pageNext);
  };

  const handlePrevPage = () => {
    setPageCurrent(pagePrev);
  };

  const handelSearchInput = (e) => {
    handleChange(e.target.value);
  };

  const handleChange = (value) => {
    setSearchTerm(value);
    filterVehicles(value);
  };

  const filterVehicles = (value) => {
    const lowercasedValue = value.toLowerCase().trim();

    if (lowercasedValue === '') {
      setFilteredVehicles(vehicles);
    } else {
      const filteredData = vehicles.filter((vehicle) => {
        return Object.keys(vehicle).some((key) =>
          vehicle[key].toString().toLowerCase().includes(lowercasedValue),
        );
      });
      setFilteredVehicles(filteredData);
    }
  };

  return (
    <Container>
      <div className="py-10">
        <label htmlFor="search-form">
          <input
            type="text"
            id="search-form"
            value={searchTerm}
            onChange={handelSearchInput}
            placeholder="Type to search..."
            className="text-gray-800 p-1 max-w-xs w-full rounded"
          />
        </label>
      </div>
      {filteredVehicles.length === 0 && (
        <p className="text-center">There is nothing to display!</p>
      )}
      <div className="grid gap-2 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredVehicles.map((vehicle) => (
          <Vehicle
            key={vehicle.url}
            url={vehicle.url}
            name={vehicle.name}
            manufacturer={vehicle.manufacturer}
            model={vehicle.model}
            passengers={vehicle.passengers}
            cargo={vehicle.cargo_capacity}
            cost={vehicle.cost_in_credits}
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

export default VehiclesPage;
