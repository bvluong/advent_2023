const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').trimEnd();

function replaceWithNum(word) {
  for (let i = 3; i < word.length; i += 3) {
    word.slice(0, i);
  }
  let testWord = '';
  let numArr = [];
  word.split('').forEach((letter) => {
    if (Number(letter)) {
      numArr.push(letter);
    } else {
      testWord += letter;
      [
        ['one', '1'],
        ['two', '2'],
        ['three', '3'],
        ['four', '4'],
        ['five', '5'],
        ['six', '6'],
        ['seven', '7'],
        ['eight', '8'],
        ['nine', '9'],
      ].forEach((x) => {
        if (pword.includes(x[0])) {
          numArr.push(x[1]);
          testWord = pword[pword.length-1];
        }
      });
    }
  });
  console.log(numArr);
  return numArr;
}

function solve(input) {
  const words = input.split('\n');
  let total = 0;
  words.forEach((row) => {
    let stringNum = '';
    let filteredRow = replaceWithNum(row);
    num = filteredRow[0] + filteredRow[filteredRow.length - 1];
    console.log(num);
    total += Number(num);
  });
  console.log(total);
}
solve(input);
