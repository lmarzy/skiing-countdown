import * as React from 'react';
import './styles.scss';

import getTimeRemaining from '../utilities/get-time-remaining/get-time-remaining';
import Countdown from '../Countdown/Countdown';

export const initialState = {
  ski: {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  zoe: {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
};

export type HomeState = Readonly<typeof initialState>;

const remainingTime = (state: HomeState): HomeState => {
  const skiDate = 'February 08 2019 11:00:00 GMT';
  const zoeBrokenBoneDate = 'February 08 2019 11:10:00 GMT';

  const timeRemainingToSki = getTimeRemaining(skiDate);
  const timeRemainingToZoeBreakage = getTimeRemaining(zoeBrokenBoneDate);

  const newState = { ...state };
  newState.ski.days = timeRemainingToSki.days;
  newState.ski.hours = timeRemainingToSki.hours;
  newState.ski.minutes = timeRemainingToSki.minutes;
  newState.ski.seconds = timeRemainingToSki.seconds;

  newState.zoe.days = timeRemainingToZoeBreakage.days;
  newState.zoe.hours = timeRemainingToZoeBreakage.hours;
  newState.zoe.minutes = timeRemainingToZoeBreakage.minutes;
  newState.zoe.seconds = timeRemainingToZoeBreakage.seconds;

  return newState;
};

export default class Home extends React.Component<{}, HomeState> {
  readonly state: HomeState = initialState;

  private interval: any;

  componentDidMount() {
    this.interval = setInterval(() => this.setState(remainingTime(this.state)), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { ski, zoe } = this.state;

    return (
      <main className="main">
        <div>
          <Countdown title="Skiing" days={ski.days} hours={ski.hours} minutes={ski.minutes} seconds={ski.seconds} />
          <Countdown
            title="Zoe Breakage"
            days={zoe.days}
            hours={zoe.hours}
            minutes={zoe.minutes}
            seconds={zoe.seconds}
          />
        </div>
      </main>
    );
  }
}
