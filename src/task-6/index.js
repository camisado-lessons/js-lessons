let str1 = "(<>[{}])"

function parentheses(str) {
  let arr = str.split('');
  if (arr.length % 2 !== 0 ||
    arr[0] === ")" || arr[0] === '}' ||
    arr[0] === '>' || arr[0] === ']' ||
    arr[arr.length - 1] === "(" ||
    arr[arr.length - 1] === '{' ||
    arr[arr.length - 1] === '[' ||
    arr[arr.length - 1] === '<') {
      return false;
    } 
    
  let countRound = 0;
  let countSquare = 0;
  let countCurly = 0;
  let countAngle = 0;
  arr.forEach((item) => {
    if (item === '(') {
      countRound++;
    } else if (item === ')') {
      countRound--;
    } else if (item === '{') {
      countCurly++;
    } else if (item === '}') {
      countCurly--;
    } else if (item === '[') {
      countSquare++;
    } else if (item === ']') {
      countSquare--;
    } else if (item === '<') {
      countAngle++;
    } else if (item === '>') {
      countAngle--;
    }
  });
  return countRound === 0 || countSquare === 0 || countCurly === 0 || countAngle === 0;
}
console.log(str1, parentheses(str1))