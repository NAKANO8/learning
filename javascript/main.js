
// setTimeout(() => {
//   console.log("Hello, World!");
// }, 1000);
// console.log("This message appears first.");

// let promise = new Promise((resolve, reject) => {
//   let tmpPromise = new Promise((resolve2) => {
//     setTimeout(() => {
//       resolve2("done");
//     }, 1000);
//   });
//   resolve()
//   resolve(tmpPromise);
// });

let promise = new Promise((resolve, reject) => {
  let thenable = {
    then() {}
  }
  resolve(thenable)
});
// let promise = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     reject("done");
//   }, 1000);
// });

promise.then((value) => {
  console.log("promise resolved.", value);
}, (error) => {
  console.log("promise rejected.", error);
});
promise.catch(() => {
  console.log("promise rejected.");
});
promise.finally(() => {
  console.log("promise settled.");
});

console.log(promise);

const promise2 = new Promise((resolve) => resolve(1).then((value) => {
  console.log(value);
  return 2;
}).then((value) => {
  console.log(value);
  throw new Error(3);
}).catch((error) => {
  console.log(error.message);
  return 4;
}));
console.log(promise2);