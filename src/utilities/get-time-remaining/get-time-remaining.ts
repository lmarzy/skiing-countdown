interface getTimeRemainingModel {
  weeks: number;
  daysLeft: number;
  hours: number;
  minutes: number;
}

const getTimeRemaining = (date: string): getTimeRemainingModel => {
  const today: Date = new Date();

  const t = Date.parse(date) - Date.parse(String(today));

  const days = Math.floor(t / (1000 * 60 * 60 * 24));

  const weeks = Math.floor(days / 7);
  const daysLeft = days % 7;
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const seconds = Math.floor((t / 1000) % 60);

  return {
    weeks,
    daysLeft,
    hours,
    minutes,
  };
};

export default getTimeRemaining;
