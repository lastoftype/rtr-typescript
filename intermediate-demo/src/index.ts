import * as Utils from "./utils";

export const Occupations = Utils.strEnum([
  "engineer",
  "teacher",
  "doctor",
  "dancer",
  "painter"
]);

export type Occupation = keyof typeof Occupations;

export const Pets = Utils.strEnum(["dog", "cat", "hampster", "goat"]);

export type Pet = keyof typeof Pets;

export type Person = {
  age: number;
  name: string;
  occupation: Occupation;
  pets?: Pet[];
};
