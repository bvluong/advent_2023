const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').trimEnd();

const map = {
  green: 13,
  red: 12,
  blue: 14,
}


function solve(input) {
  const rows = input.split('\n');
  let ans = []
  rows.forEach((row) => {
    let ansKey = {
      green: 0,
      red: 0,
      blue: 0
    };
    const [key, value] = row.split(': ')
    let bag = value.replaceAll(';', ',')
    bag.split(', ').forEach(item => {
      [num, color] = item.split(' ');
      if (Number(num) > ansKey[color]) {
        ansKey[color] = Number(num);
      }
    })
    ans.push(ansKey);
  })
  let sum = 0;
  ans.forEach(row => {
    let power = Object.values(row).reduce((acc,curr) => {
      return acc * Number(curr); 
    }, 1)
    console.log(row);
    console.log(power);
    sum += power
  })
  console.log(ans);
  console.log(sum);
  // let result = ans.reduce((acc, curr) => {
  //   const [y,num] = curr.split(' ')
  //   return acc += Number(num);
  // },0)
  // console.log(result)
  // console.log(rows);
}
solve(input);
