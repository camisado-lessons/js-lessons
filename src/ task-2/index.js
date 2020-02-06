function calculate(obj) {
        
    let string = 0;
    let number = 0;
    let boolean = 0;
    let other = 0;

    for (let key in obj) {
        
        switch (typeof obj[key]) {
          case 'string': 
            string ++;
            break; 
          case 'number':
            number ++;
            break;
          case 'boolean':
            boolean ++;
            break;
          default:
            other ++;
        }
    }
    return {string, number, boolean , other};
};

let numb = {
    a: 4,
    operation: '+',
    b: 2,
};

calculate(numb);
