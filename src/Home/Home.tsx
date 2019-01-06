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
  brokenBone: {
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  },
};

export type HomeState = Readonly<typeof initialState>;

const remainingTime = (state: HomeState): HomeState => {
  const skiDate = 'February 08 2019 15:30:00 GMT';
  const brokenBoneDate = 'February 08 2019 16:30:00 GMT';

  const timeRemainingToSki = getTimeRemaining(skiDate);
  const timeRemainingToBoneBreakage = getTimeRemaining(brokenBoneDate);

  const newState = { ...state };
  newState.ski.weeks = timeRemainingToSki.weeks;
  newState.ski.days = timeRemainingToSki.daysLeft;
  newState.ski.hours = timeRemainingToSki.hours;
  newState.ski.minutes = timeRemainingToSki.minutes;

  newState.brokenBone.weeks = timeRemainingToBoneBreakage.weeks;
  newState.brokenBone.days = timeRemainingToBoneBreakage.daysLeft;
  newState.brokenBone.hours = timeRemainingToBoneBreakage.hours;
  newState.brokenBone.minutes = timeRemainingToBoneBreakage.minutes;

  return newState;
};

export default class Home extends React.Component<{}, HomeState> {
  readonly state: HomeState = initialState;

  private interval: any;

  componentDidMount() {
    this.setState(remainingTime(this.state));
    this.interval = setInterval(() => this.setState(remainingTime(this.state)), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { ski, brokenBone } = this.state;

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
            title="Ski Newbie Bone Breakage"
            weeks={brokenBone.weeks}
            days={brokenBone.days}
            hours={brokenBone.hours}
            minutes={brokenBone.minutes}
            type="brokenBone"
          />
        </div>
      </main>
    );
  }
}
