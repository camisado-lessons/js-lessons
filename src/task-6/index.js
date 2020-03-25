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

//версия 2.0

function parentheses2(str) {
  let arr = str.split('');
  let bracketsLeft = [...arr];
  let stack = [];
	let brakets = {
  	opened: {
  		round: '(',
  		square: '[',
  		curly: '{',
  		angle: '<',
  	},
    closed: {
    	round: ')',
  		square: ']',
  		curly: '}',
  		angle: '>',
    },
  };
  
  for( let i = 0 ; i < arr.length; i++) {
  	if (Object.values(brakets.opened).indexOf(arr[i]) !== -1) {
    	stack.push(arr[i]);
      bracketsLeft.shift();
    }
    
    if (Object.values(brakets.closed).indexOf(arr[i]) !== -1) {
    	let key = Object.keys(brakets.closed).find((k) => brakets.closed[k] === arr[i]);
    	if (brakets.opened[key] === stack[stack.length-1]) {
      	stack.pop();
				bracketsLeft.shift();				      	
      }
    }
  }

  return bracketsLeft.length === 0 && stack.length === 0;	 
}
console.log(parentheses2(str1));