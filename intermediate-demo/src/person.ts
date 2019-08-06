import * as Models from "./models";

export class Employee implements Models.Person {
  age: number;
  name: string;
  occupation: Models.Occupation;
  pets?: Models.Pet[];

  constructor(person: Models.Person) {
    this.name = person.name;
    this.age = person.age;
    this.occupation = person.occupation;
    this.pets = person.pets;
  }
}

const Tim = new Employee({
  age: 12,
  name: "Tim",
  occupation: Models.Occupations.dancer,
  pets: [Models.Pets.goat, Models.Pets.hampster]
});
