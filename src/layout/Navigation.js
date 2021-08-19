import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-green-200 w-full max-w-screen-xl mx-auto">
      <ul className="flex items-center justify-center space-x-4">
        <li className="border-2 border-green-200 py-2 px-3 uppercase hover:bg-green-800 hover:text-gray-200 transition-colors duration-300 ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="border-2 border-green-200 py-2 px-3 uppercase hover:bg-green-800 hover:text-gray-200 transition duration-300 ease-in-out">
          <Link to="/persons">Persons</Link>
        </li>
        <li className="border-2 border-green-200 py-2 px-3 uppercase hover:bg-green-800 hover:text-gray-200 transition duration-300 ease-in-out">
          <Link to="/vehicles">Vehicles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
