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

export function checkTypesField(data: IJobSubmit) {

  if (typeof data.name !== 'string' && data.name) {
    return "Field 'name' must be a string.";
  }

  if (typeof data.age !== 'number' && data.age) {
    return "Field 'age' must be a number.";
  }

  if (typeof data.phone !== 'string' && data.phone) {
    return "Field 'phone' must be a string.";
  }

  if (typeof data.state !== 'string' && data.state) {
    return "Field 'state' must be a string.";
  }

  if (typeof data.city !== 'string' && data.city) {
    return "Field 'city' must be a string";
  }
}