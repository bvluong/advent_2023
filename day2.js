
function solve(input) {
  const rows = input.split('\n');
  let values = []
  rows.forEach((row) => {
    let minValues = {
      green: 0,
      red: 0,
      blue: 0
    };
    const [key, value] = row.split(': ')
    let bag = value.replaceAll(';', ',')
    bag.split(', ').forEach(item => {
      [num, color] = item.split(' ');
      if (Number(num) > minValues[color]) {
        minValues[color] = Number(num);
      }
    })
    values.push(minValues);
  })
  let sum = 0;
  powerList.forEach(row => {
    let power = Object.values(row).reduce((acc,curr) => {
      return acc * Number(curr); 
    }, 1)
    sum += power
  })
  console.log(sum);
}
solve(input);
