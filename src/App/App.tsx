import * as React from 'react';

interface AppProps {
  a: string;
  b: number;
}

const App = ({ a, b }: AppProps) => (
  <div>
    <h1>React Typescript App</h1>
  </div>
);

export default App;
