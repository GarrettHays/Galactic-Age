import {LifeExpectancy} from '../src/js/expectancy.js';
import GalacticAge from '../src/js/galactic.js';

describe('LifeExpectancy', () => {
  let age;

  beforeEach (() => {
    age = new GalacticAge(33,79);
  });

  test('should calculate years left between life expectancy and user age on Earth', () => {
    let timeLeft = LifeExpectancy(33, 79);
    expect(timeLeft).toEqual(46);    
  });
});