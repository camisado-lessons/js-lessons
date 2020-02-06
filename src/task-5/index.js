let str1 = "(())))"

function parentheses(str) {
  let arr = str.split('');
  if (arr.length % 2 !== 0 ||
      arr[0] === ")" ||
      arr[arr.length - 1] === "(") {
    return false;
  }
  
  let i = 0;
  arr.forEach((item) => {
    if (item === '(') {
      i++;
    } else {
      i--;
    }
  })
  return i === 0;
}
console.log(str1, parentheses(str1))