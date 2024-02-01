function fibonacci(num) {
  let num1 = 0
  let num2 = 1

  if (num == 0) {
    return 0
  }

  for (let i = 0; i < num - 1; i++) {
    let num3 = num1 + num2
    num1 = num2
    num2 = num3
  }
  return num2
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
