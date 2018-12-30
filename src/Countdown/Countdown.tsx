import * as React from 'react';
import './styles.scss';

interface CountdownProps {
  title: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ title, days, hours, minutes, seconds }: CountdownProps) => (
  <section className="countdown">
    <h2 className="countdown__title">{title}</h2>
    <ol className="countdown__list">
      <li>
        <div>
          <span>{days}</span>
          <span>Days</span>
        </div>
      </li>
      <li>
        <div>
          <span>{hours}</span>
          <span>Hours</span>
        </div>
      </li>
      <li>
        <div>
          <span>{minutes}</span>
          <span>Minutes</span>
        </div>
      </li>
      <li>
        <div>
          <span>{seconds}</span>
          <span>Seconds</span>
        </div>
      </li>
    </ol>
  </section>
);

export default Countdown;
