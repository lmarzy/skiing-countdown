import * as React from 'react';
import './styles.scss';

interface CountdownProps {
  title: string;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  type: string;
}

const Countdown = ({ title, weeks, days, hours, minutes, type }: CountdownProps) => (
  <section className={`countdown countdown--${type}`}>
    <h2 className="countdown__title">{title}</h2>
    <ol className="countdown__list">
      <li>
        <div>
          <span>{weeks}</span>
          <span>Weeks</span>
        </div>
      </li>
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
    </ol>
  </section>
);

export default Countdown;
