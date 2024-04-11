import { IJobSubmit } from "../Interfaces/IJobSubmit";

const FIELDS = ["name", "age", "phone", "state", "city"];

export function hasAllFields(data: IJobSubmit) {
  return Object.keys(data).length !== 0 ? true : false;
}

export function checkField(data: IJobSubmit) {
  for (const field of FIELDS) {
    if (!(field in data)) return field;
  }
}