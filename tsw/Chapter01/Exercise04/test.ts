// Command Line Commands
// tsc test.ts
// node test.js

const daysInWeek = 7;
const person = "Ada Lovelace";
const isRaining = false;
const today = new Date();
const months = ["January", "February", "March"];
const notDefined = undefined;
const nothing = null;
const add = (x:number, y: number) => x + y;
const calculator = {
  add, adds
};
function adds (x: number): number {
  x = x + x;
  if (x<129) {
    return adds(x);
  }
  return x;
}

const everything = [daysInWeek, person, isRaining, today, months, notDefined, nothing, add, calculator, adds];

for (const something of everything) {
  const type = typeof something;
  console.log(something, type);
}
console.log(adds(1));