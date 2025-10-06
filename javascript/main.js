// const userInput = '10';
// calcResult = Number(userInput) + 10;
// calcResult = parseInt(userInput) + 10;
// calcResult = parseFloat(userInput) + 10;
// console.log(calcResult);

// const tenNumber = 10;
// calcResult = '10' + String(tenNumber);
// calcResult = '10' + tenNumber.toString();
// console.log(calcResult);

// function addResult(num1,num2) {
//   return num1 + num2;
// }

// const lastResult = addResult(1,2);
// console.log(lastResult);

// const hello = 'hello';
// console.log(hello);
// ok = 0;
// if (ok) {
//   console.log(ok);
// } else {
//   console.log('not ok');
// }
// //左がtruthyなら右側を返す
// //左がfalseyなら左側を返す
// ok = false && false;
// console.log(ok);

// //左がtruthyなら左側を返す
// //左がfalseyなら右側を返す
// ok = true || false;
// console.log(ok);

// const userInputNothing = '';
// const userName = userInput || 'User';
// console.log(userName)

// function add(num1,num2) {
//   console.log(num1 + num2);
// }

// add(1,2);
// add(1,2);
// add(1,2);
// let watchedValue = 1;
// watchedValue = 2;
// watchedValue = 3;
// console.log(watchedValue);

// let userName2 = '' ?? 'User';
// console.log(userName2);

// let ok = !!15;
// console.log(ok);

// {
//   const hello = 'hello';
//   console.log(hello);
// }
// const hello = 'hello2';
// {
//   console.log(hello);
//   // const hello = 'hello1';
// }

// ok = 0;
// if (ok) {
//   console.log(ok);
// } else if (ok === 0 ) {
//   console.log('umm..ok!');
// } else {
//   console.log('Not OK');
// }
// ok = '';
// ok = ok ? 'OK' : 'NO';
// console.log(ok)

// function vegetableColor(vegetable) {
//   switch (vegetable) {
//     case 'tomato':
//     case 'paplika': {
//       const message = `${vegetable} is red`;
//       console.log(message);
//       break;
//     }
//     case 'banana': {
//       const message = `${vegetable} is yellow`;
//       console.log(message);
//       break;
//     }
//     case 'green pepper': {
//       const message = `${vegetable} is green`;
//       console.log(message);
//       break;
//     }
//     default: {
//       console.log('unknown');
//     }
//   }

  // if (vegetable === 'tomato') {
  //   console.log('red');
  // } else if (vegetable === 'banana') {
  //   console.log('yellow');
  // } else if (vegetable === 'green pepper') {
  //   console.log('green');
  // } else {
  //   console.log('unknown');
  // }
// }

// vegetableColor('tomato');
// vegetableColor('banana');
// vegetableColor('green pepper');
// vegetableColor('onion');
// vegetableColor('paplika');
// let i = 0;
// while (i < 10) {
//   let count = i + 1;
//   console.log(`ループ${count}回目`);
//   i += 1;
// }
let tomatoCount = 0;
do {
  tomatoCount += 1;
  console.log(`トマトを${tomatoCount}個買いました`);
} while (tomatoCount < 10);

const Array = ['apple','banana','orange'];
for (let i = 0;i < Array.length;i += 1) {
  console.log(Array[i]);
}

let a = 'a', b = 'b',c;
c = 'c';
console.log(a,b,c); 

const fruits = ['apple','banana','orange'];
for (const fruit of fruits) {
  console.log(fruit);
}

const char = ['お','に','ぎ','り'];
for (const c of char) {
  console.log(c);
}
const coffee = {
  type: 'latte',
  price: 400,
  size: 'tall'
};
for (const key in coffee) {
  console.log(`${key}: ${coffee[key]}`);
}
// array of
// object in
// break はループの終了
// continue は次のループへ
// returnは関数の終了、元に戻る
// 最も内側のループから逃れる


function printFruits() {
  try {
    console.log('try');
    throw 'error';
  } catch (error) {
    console.log('エラーが発生しました');
  } finally {
    console.log('finally');
  } // エラーが発生してもしなくても必ず実行される
}
printFruits();