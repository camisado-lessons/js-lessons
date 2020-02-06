let numb = {
    a: 4,
    operation: '+',
    b: 2,
};

function calculate(numb) {

    let count = 0;
    
    switch (numb.operation) {
        case '+':
            count = numb.a + numb.b;
            break;
        case '-':
            count = numb.a - numb.b;
            break;
        case '*':
            count = numb.a * numb.b;
            break;
        case '/':
            count = numb.a / numb.b;
            break;
    };
    return '' + numb.a + numb.operation + numb.b + '=' + count;    
};