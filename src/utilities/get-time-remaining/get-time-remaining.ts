const getTimeRemaining = (date: any): any => {
  const today = new Date();

  const t = Date.parse(date) - Date.parse(today);

  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const seconds = Math.floor((t / 1000) % 60);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

export default getTimeRemaining;
