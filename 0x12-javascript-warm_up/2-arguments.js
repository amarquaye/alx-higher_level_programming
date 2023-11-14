#!/usr/bin/node
let j;
if (process.argv.length < 3) {
  j = 'No argument';
} else if (process.argv.length === 3) {
  j = 'Argument found';
} else {
  j = 'Arguments found';
}
console.log(j);
