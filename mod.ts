import type { Envelope } from "./types/types.d.ts";

export interface HelloFunction {
  (name: string): string;
}

export const helloWorld: HelloFunction = (name) => {
  console.log("Hello World!", name);
  return "Hello World!" + name;
}

export const MY_STRING = "Hello World!";

export const envelope: Envelope = {
  name: "John Doe",
  age: 30,
  address: "123 Main St",
  phone: "555-555-5555",
  message: "Hello World!",
};
