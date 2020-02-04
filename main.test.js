/******************
 * YOUR CODE HERE *
 ******************/

let greeting = 'Hello'

let sum = 0

let prod= 0

function greet (word) 
{greeting= 'Hello' + ' ' + word }

function sumOfTwo (num1,num2) {sum= num1 + num2}

function multiply (num1,num2,num3) {prod=num1*num2*num3}

function sayHi (name) {greeting= 'Hello ' + name +'!'
return greeting }

function returnWhatISay (string) {return (string)}

function divide (n1,n2) {return n1/n2}

function remainder (n1,n2) {return n1 % n2}


/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof greeting === 'undefined') {
  greeting = undefined;
}

if (typeof sum === 'undefined') {
  sum = undefined;
}

if (typeof prod === 'undefined') {
  prod = undefined;
}

if (typeof greet === 'undefined') {
  greet = undefined;
}

if (typeof sumOfTwo === 'undefined') {
  sumOfTwo = undefined;
}

if (typeof multiply === 'undefined') {
  multiply = undefined;
}

if (typeof sayHi === 'undefined') {
  sayHi = undefined;
}

if (typeof returnWhatISay === 'undefined') {
  returnWhatISay = undefined;
}

if (typeof divide === 'undefined') {
  divide = undefined;
}

if (typeof remainder === 'undefined') {
  remainder = undefined;
}

describe('greet', () => {
  it(`Adds hello to the parameter name and puts it in greeting'`, () => {
    greet('mess')
    expect(greeting).toBe('Hello mess')
  })
});

describe('sumOfTwo', () => {
  it(`adds the two parameters and puts the result in sum`, () => {
    sumOfTwo(2, 4);
    expect(sum).toEqual(6);
  })
});

describe('multiply', () => {
  it(`multiplies the three parameters and puts the result in prod`, () => {
    multiply(2, 2, 2);
    expect(prod).toBe(8);
  })
});

describe('returnWhatISay', () => {
  it(`returns the given string unchanged`, () => {
    const returnValue = returnWhatISay('Colin')
    expect(returnValue).toEqual(`Colin`);
  })
});

describe('sayHi', () => {
  it(`takes the given parameter and adds 'Hello ' before it (note the space!), returning the result`, () => {
    const returnValue = sayHi('Colin')
    expect(returnValue).toEqual(`Hello Colin!`);
  })
});

describe('divide', () => {
  it(`divides the first parameter by the second parameter and returns the result`, () => {
    const returnValue = divide(10, 5)
    expect(returnValue).toEqual(2);
  })
});

describe('remainder', () => {
  it(`returns the remainder you get when you divide the first parameter by the second parameter`, () => {
    const returnValue = remainder(10, 3)
    expect(returnValue).toEqual(1);
  })
});