const PROMISE_STATE = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2,
};

class MyPromise {
  constructor(executor) {
    executor(this.#resolve.bind(this), this.#reject.bind(this));
  }
  #callbacks = [];
  #result;
  #state = PROMISE_STATE.PENDING;
  #resolve(value) {
    if (this.#state !== PROMISE_STATE.PENDING) return;

    this.#result = value;

    this.#state = PROMISE_STATE.FULFILLED;

    queueMicrotask(() => {
      this.#callbacks.forEach((cb) => cb());
    });
  }

  #reject() {}

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.#state === PROMISE_STATE.PENDING) {
        this.#callbacks.push(() => {
          resolve(onFulfilled(this.#result));
        });
        
      } else if (this.#state === PROMISE_STATE.FULFILLED) {
        queueMicrotask(() => {
          resolve(onFulfilled(this.#result));
        });
      }
    });
  }
}

const mp = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("孙悟空");
  }, 1000);
  //   resolve("猪八戒");
});

let result = mp.then((result) => {
  console.log("第一次读" + result);
  return result
});
result
  .then((result) => {
    console.log(result);

    return "猪八戒";
  })
  .then((result) => {
    console.log(result);
    return "沙和尚";
  })
  .then((result) => {
    console.log(result);
  });


