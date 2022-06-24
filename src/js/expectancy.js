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

export const venusExpectancy = (venusAge, expected) => {
  let venusTimeLeft = (expected - venusAge);
  if (venusTimeLeft < 0) {
    let venusOvertime = Math.abs(venusTimeLeft);
    return venusOvertime;
  }
  return venusTimeLeft;
};

export const marsExpectancy = (marsAge, expected) => {
  let marsTimeLeft = (expected - marsAge);
  if (marsTimeLeft < 0) {
    let marsOvertime = Math.abs(marsTimeLeft);
    return marsOvertime;
  }
  return marsTimeLeft;
};