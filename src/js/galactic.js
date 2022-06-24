export default class GalacticAge {
  constructor(age, expected) {
    this.age = age;
    this.years = 0;
    this.days = 0;
    this.expected = expected;
  }

  earthDays(){
    let userAge = this.age;
    let totalDaysAge = userAge * 365;
    this.days = totalDaysAge;
    return totalDaysAge;
  }
}