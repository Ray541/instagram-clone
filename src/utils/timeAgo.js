export const timeAgo = (timestamp) => {
  const now = Date.now();
  const secondsAgo = Math.floor((now - timestamp) / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo}s ago`; //Seconds Ago ex:- 1s
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60); //Minutes Ago ex:- 1m
    return `${minutesAgo}m ago`;
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600); //Hours Ago ex:- 1h
    return `${hoursAgo}h ago`;
  } else if (secondsAgo < 604800) {
    const daysAgo = Math.floor(secondsAgo / 86400); //One Day Ago ex:- 24hrs
    return `${daysAgo}d ago`;
  } else {
    const weeksAgo = Math.floor(secondsAgo / 604800); //One Week Ago ex:- 2weeks
    return `${weeksAgo}w ago`;
  }
};
