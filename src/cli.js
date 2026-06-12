#!/usr/bin/env node

// CLI for the calculator (uses src/calculator.js)
// Supported operations: add (+), subtract (-), multiply (*), divide (/)

const { add, subtract, multiply, divide } = require('./calculator');

function usage() {
  console.log('Usage: node src/cli.js <operation> <num1> <num2>');
  console.log('Operations: add (+), subtract (-), multiply (*), divide (/)');
}

function parseNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) {
    console.error(`Invalid number: ${value}`);
    process.exit(3);
  }
  return n;
}

const args = process.argv.slice(2);
if (args.length !== 3) {
  usage();
  process.exit(1);
}

const [op, aRaw, bRaw] = args;
const a = parseNumber(aRaw);
const b = parseNumber(bRaw);

try {
  let result;
  switch (op) {
    case 'add':
    case '+':
      result = add(a, b);
      break;
    case 'subtract':
    case '-':
      result = subtract(a, b);
      break;
    case 'multiply':
    case '*':
    case 'x':
    case 'X':
      result = multiply(a, b);
      break;
    case 'divide':
    case '/':
      result = divide(a, b);
      break;
    default:
      console.error(`Unknown operation: ${op}`);
      usage();
      process.exit(4);
  }

  // Print result to stdout
  console.log(result);
  process.exit(0);
} catch (err) {
  if (err.message && err.message.includes('Division by zero')) {
    console.error('Error: division by zero is not allowed');
    process.exit(2);
  }
  console.error('Error:', err.message || err);
  process.exit(5);
}
