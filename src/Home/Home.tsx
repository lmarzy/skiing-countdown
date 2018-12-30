import * as React from 'react';
import './styles.scss';

import getTimeRemaining from '../utilities/get-time-remaining/get-time-remaining';
import Countdown from '../Countdown/Countdown';

export const initialState = {
  ski: {
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  },
  zoe: {
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  },
};

export type HomeState = Readonly<typeof initialState>;

const remainingTime = (state: HomeState): HomeState => {
  const skiDate = 'February 08 2019 12:00:00 GMT';
  const zoeBrokenBoneDate = 'February 08 2019 12:30:00 GMT';

  const timeRemainingToSki = getTimeRemaining(skiDate);
  const timeRemainingToZoeBreakage = getTimeRemaining(zoeBrokenBoneDate);

  const newState = { ...state };
  newState.ski.weeks = timeRemainingToSki.weeks;
  newState.ski.days = timeRemainingToSki.daysLeft;
  newState.ski.hours = timeRemainingToSki.hours;
  newState.ski.minutes = timeRemainingToSki.minutes;

  newState.zoe.weeks = timeRemainingToZoeBreakage.weeks;
  newState.zoe.days = timeRemainingToZoeBreakage.daysLeft;
  newState.zoe.hours = timeRemainingToZoeBreakage.hours;
  newState.zoe.minutes = timeRemainingToZoeBreakage.minutes;

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
          <Countdown
            title="Skiing"
            weeks={ski.weeks}
            days={ski.days}
            hours={ski.hours}
            minutes={ski.minutes}
            type="ski"
          />
          <Countdown
            title="Zoe Bone Breakage"
            weeks={zoe.weeks}
            days={zoe.days}
            hours={zoe.hours}
            minutes={zoe.minutes}
            type="zoe"
          />
        </div>
      </main>
    );
  }
}
