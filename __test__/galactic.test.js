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