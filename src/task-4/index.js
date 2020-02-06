let a = {
    a: 123,
    b: '123',
    c: 'asd1',
    d: {
      d:'asd',
      c:133,
    }
  };
  let b = {
    a: 123,
    b: '123',
    c: 'asd1',
    d: {
      d:'asd',
      c:133,
    }
  };
  
  function checkObj(a, b) {
    let count1 = 0;
    let count2 = 0;
  
    for (let key in a) {
      let value = a[key];
      count1++;
    };
    for (let key in b) {
      let value = b[key];
      count2++;
    };
    if (count1 === count2) {
      for(let key in a) {
        if (typeof a[key] === 'object') {
          if (checkObj(a[key], b[key]) !== true){
            return false;
          } 
        } else {
          if (a[key] !== b[key]) {
            return false;
          }
        }    
      }
      return true;
    } else {
        return false;
    }
  };
  console.log(checkObj(a,b));