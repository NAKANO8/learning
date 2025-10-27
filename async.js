func = async () => {
  await log(3);
  await log(2);
  await log(1);
};
console.log(4);

log = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(num);
      resolve();
    }, 1000);
  });
};

func();
