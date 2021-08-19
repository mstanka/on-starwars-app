const Vehicle = ({
  url,
  name,
  manufacturer,
  model,
  passengers,
  cargo,
  cost,
}) => {
  return (
    <li
      key={url}
      className="max-w-xs w-full p-4 text-gray-700 bg-white border-2 border-gray-200 rounded-lg shadow-sm list-none"
    >
      <p className="font-bold text-2xl text-green-800 pb-4 border-b-2 mb-2">
        {name}
      </p>
      <p>
        Manufacturer: <span className="font-bold"> {manufacturer}</span>
      </p>
      <p>
        Model: <span className="font-bold"> {model} </span>
      </p>
      <p>
        Passengers: <span className="font-bold">{passengers}</span>
      </p>
      <p>
        Cargo capacity: <span className="font-bold">{cargo}</span>
      </p>
      <p>
        Cost in credits: <span className="font-bold">{cost}</span>
      </p>
    </li>
  );
};

export default Vehicle;
