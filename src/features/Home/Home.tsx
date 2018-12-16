import * as React from 'react';

export const initialState = {
  title: 'Home',
};

export type HomeState = Readonly<typeof initialState>;

class Home extends React.Component<{}, HomeState> {
  readonly state: HomeState = initialState;

  render() {
    const { title } = this.state;

    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Home;
