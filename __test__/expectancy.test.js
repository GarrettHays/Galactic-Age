import {lifeExpectancy, mercuryExpectancy, venusExpectancy} from '../src/js/expectancy.js';
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

  test('should return years over life expectancy if user age is greater than expectancy', () => {
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

  test('should return years over life expectancy in Mercury years if user age is greater than expectancy', () => {
    let mercuryTimeLeft = mercuryExpectancy(330, 328);
    expect(mercuryTimeLeft).toEqual(2);
  });
});

describe('venusExpectancy', () => {
  let age;

  beforeEach (() => {
    age = new GalacticAge(33,79);
  });

  test('should calculate years left in Venus years', () => {
    age.earthDays();
    let venusAge = age.convertVenus();
    let venusTimeLeft = venusExpectancy(venusAge, 128);
    expect(venusTimeLeft).toEqual(74);
  });

  test('should return years over life expectancy in Venus years if user age is greater than expectancy', () => {
    let venusTimeLeft = venusExpectancy(150, 128);
    expect(venusTimeLeft).toEqual(22);
  });
});