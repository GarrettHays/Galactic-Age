import GalacticAge from '../src/js/galactic.js';

describe('galacticAge', () => {
  let age;

  beforeEach (() => {
    age = new GalacticAge(33,79);
  });

  test('should take user age input then save to object', () => {
    expect(age.age).toEqual(33);
  });

  test('should take user life expectancy then save to object', () => {
    expect(age.expected).toEqual(79);
  });
});

describe('earthDays', () => {
  let age;

  beforeEach (() => {
    age = new GalacticAge(33,79);
  });

  test('should save user age input in days as variable', () => {
    let totalLifeDays = age.earthDays();
    let totalYearsAge = totalLifeDays / 365;
    expect(totalYearsAge).toEqual(33);
  });

  test('should multiply user age in days by 365 to set age in total earth days as variable', () => {
    let totalLifeDays = age.earthDays();
    expect(totalLifeDays).toEqual(12045);
  });
});