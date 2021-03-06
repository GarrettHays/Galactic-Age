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

  test('should set total earth days alive value to GalacticAge object this.days', () => {
    age.earthDays();
    expect(age.days).toEqual(12045);
  });
});

describe('convertMercury', () => {
  let age;

  beforeEach (() => {
    age = new GalacticAge(33,79);
  });

  test('should take total user age in days and divide by days for Mercury year', () => {
    age.earthDays();
    let ageMercury = age.convertMercury();
    expect(ageMercury).toEqual(137);
  });
});

describe('convertVenus', () => {
  let age;

  beforeEach (() => {
    age = new GalacticAge(33,79);
  });

  test('should take total user age in days and divide by days for Venus year', () => {
    age.earthDays();
    let ageVenus = age.convertVenus();
    expect(ageVenus).toEqual(54);
  });
});

describe('convertMars', () => {
  let age;

  beforeEach (() => {
    age = new GalacticAge(33,79);
  });

  test('should take total user age in days and divide by days for Mars year', () => {
    age.earthDays();
    let ageMars = age.convertMars();
    expect(ageMars).toEqual(18);
  });
});

describe('convertJupiter', () => {
  let age;

  beforeEach (() => {
    age = new GalacticAge(33,79);
  });

  test('should take total user age in days and divide by days for Jupiter year', () => {
    age.earthDays();
    let ageJupiter = age.convertJupiter();
    expect(ageJupiter).toEqual(3);
  });
});