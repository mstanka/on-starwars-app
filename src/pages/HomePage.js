import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="w-full max-w-screen-2xl h-screen  overflow-hidden relative m-auto">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1547700055-b61cacebece9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt=""
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="flex flex-col h-full items-center justify-center text-center relative">
        <h1 className="text-6xl text-green-300 font-bold uppercase tracking-wider mb-3 ">
          Star Wars
        </h1>
        <h2 className="text-2xl sm:text-3xl tracking-wide text-green-200">
          Discover{' '}
          <Link to="/persons" className="hover:text-gray-200">
            persons
          </Link>{' '}
          and{' '}
          <Link to="/vehicles" className="hover:text-gray-200">
            vehicles
          </Link>{' '}
          ...
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
