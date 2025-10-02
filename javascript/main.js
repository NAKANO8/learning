const userInput = '10';
calcResult = Number(userInput) + 10;
calcResult = parseInt(userInput) + 10;
calcResult = parseFloat(userInput) + 10;
console.log(calcResult);

const tenNumber = 10;
calcResult = '10' + String(tenNumber);
calcResult = '10' + tenNumber.toString();
console.log(calcResult);

function addResult(num1,num2) {
  return num1 + num2;
}

const lastResult = addResult(1,2);
console.log(lastResult);

const hello = 'hello';
console.log(hello);

ok = 0;
if (ok) {
  console.log(ok);
} else {
  console.log('not ok');
}
//左がtruthyなら右側を返す
//左がfalseyなら左側を返す
ok = false && false;
console.log(ok);

//左がtruthyなら左側を返す
//左がfalseyなら右側を返す
ok = true || false;
console.log(ok);

const userInputNothing = '';
const userName = userInput || 'User';
console.log(userName)