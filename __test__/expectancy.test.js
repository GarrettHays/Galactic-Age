import {lifeExpectancy, mercuryExpectancy, mercuryExpected} from '../src/js/expectancy.js';
import GalacticAge from '../src/js/galactic.js';

describe('lifeExpectancy', () => {
  let age;

  beforeEach (() => {
    age = new GalacticAge(33,79);
  });

  test('should calculate years left between life expectancy and user age on Earth', () => {
    let timeLeft = lifeExpectancy(33, 79);
    expect(timeLeft).toEqual(46);    
  });

  test('should output years over life expectancy if user age is greater than expectancy', () => {
    let timeLeft = lifeExpectancy(89, 79);
    expect(timeLeft).toEqual(10);
  });
});

describe('mercuryExpectancy', () => {
  let age;

  beforeEach (() => {
    age = new GalacticAge(33,79);
  });
  test('should calculate years left in Mercury years', () => {
    age.earthDays();
    let mercuryAge = age.convertMercury();
    let mercuryTimeLeft = mercuryExpectancy(mercuryAge, 328);
    expect(mercuryTimeLeft).toEqual(191);
  });
});