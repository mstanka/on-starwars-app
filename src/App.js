import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PersonsPage from './pages/PersonsPage';
import VehiclesPage from './pages/VehiclesPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <header>
        <nav className="bg-green-200">
          <ul className="flex items-center justify-center space-x-4">
            <li className="border-2 border-green-200 py-2 px-3 hover:bg-green-800 hover:text-gray-200 transition-colors duration-300 ease-in-out">
              <Link to="/">Home</Link>
            </li>
            <li className="border-2 border-green-200 py-2 px-4 hover:bg-green-800 hover:text-gray-200 transition duration-300 ease-in-out">
              <Link to="/persons">Persons</Link>
            </li>
            <li className="border-2 border-green-200 py-2 px-4 hover:bg-green-800 hover:text-gray-200 transition duration-300 ease-in-out">
              <Link to="/vehicles">Vehicles</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/persons">
            <PersonsPage />
          </Route>
          <Route path="/vehicles">
            <VehiclesPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
