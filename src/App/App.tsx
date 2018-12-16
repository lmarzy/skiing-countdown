import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../features/Home/Home';
import About from '../features/About/About';

interface AppProps {
  a: string;
  b: number;
}

const App = ({ a, b }: AppProps) => (
  <Router>
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </>
  </Router>
);

export default App;
