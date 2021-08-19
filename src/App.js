import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import PersonsPage from './pages/PersonsPage';
import VehiclesPage from './pages/VehiclesPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <header>
        <Navigation />
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
      <Footer />
    </Router>
  );
};

export default App;
