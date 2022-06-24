export const LifeExpectancy = (age, expected) => {
  let timeLeft = (expected - age);
  if (timeLeft < 0) {
    let overTime = Math.abs(timeLeft);
    return overTime;
  }
  return timeLeft;
};