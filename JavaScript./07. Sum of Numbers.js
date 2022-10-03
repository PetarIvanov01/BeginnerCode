function sum(input) {
  let numb = input[0]
  let sum = 0;
  for (let i = 0; i < numb.length; i++) {
      sum += Number(numb[i]);
  }
  console.log(`The sum of the digits is:${sum}`);
}
