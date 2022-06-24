export default class GalacticAge {
  constructor(age, expected) {
    this.age = age;
    this.days = 0;
    this.expected = expected;
  }

  earthDays(){
    let userAge = this.age;
    let totalLifeDays = userAge * 365;
    this.days = totalLifeDays;
    return totalLifeDays;
  }

  convertMercury() {
    let ageMercury = Math.round(this.days / 88);
    return ageMercury;
  }
}