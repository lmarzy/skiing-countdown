import * as React from 'react';
import './styles.scss';

export const initialState = {
  title: 'Home',
};

export type HomeState = Readonly<typeof initialState>;

class Home extends React.Component<{}, HomeState> {
  readonly state: HomeState = initialState;

  render() {
    const { title } = this.state;

    return (
      <div className="home">
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Home;
