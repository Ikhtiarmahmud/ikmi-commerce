import './App.css';
import HomePage from './containers/HomePage/index';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
