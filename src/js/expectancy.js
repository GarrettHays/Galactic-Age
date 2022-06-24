export const lifeExpectancy = (age, expected) => {
  let timeLeft = (expected - age);
  if (timeLeft < 0) {
    let overTime = Math.abs(timeLeft);
    return overTime;
  }
  return timeLeft;
};

export const mercuryExpectancy = (mercuryAge, expected) => {
  let mercuryTimeLeft = (expected - mercuryAge);
  if (mercuryTimeLeft < 0) {
    let mercuryOvertime = Math.abs(mercuryTimeLeft);
    return mercuryOvertime;
  }
  return mercuryTimeLeft;
};