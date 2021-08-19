import axios from 'axios';
import { useState, useEffect } from 'react';
import Vehicle from '../components/Vehicle';
import Container from '../layout/Container';
import Spinner from '../components/Spinner';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState(null);
  const [pageCurrent, setPageCurrent] = useState(
    `https://swapi.dev/api/vehicles/?page=1`,
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
        setVehicles(response.data.results);
      })
      .catch((error) => setError(error));
  }, [pageCurrent]);

  if (error) return `Error: ${error.message}`;
  if (!vehicles) return <Spinner />;

  const handleNextPage = () => {
    setPageCurrent(pageNext);
  };

  const handlePrevPage = () => {
    setPageCurrent(pagePrev);
  };

  return (
    <Container>
      <div className="grid gap-2 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle) => (
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
