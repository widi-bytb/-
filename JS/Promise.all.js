const PromiseAll = (iterator) => {
  const promises = Array.from(iterator);
  const len = promises.length;
  let index = 0;
  let data = [];
  return new Promise((resolve, reject) => {
    for (let i in promises) {
      promises[i]
        .then((res) => {
          data[i] = res;
          if (++index === len) {
            resolve(data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

const promise1 = Promise.resolve('promise1');
const promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, 'promise2');
});
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, 'promise3');
});

PromiseAll([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
});
