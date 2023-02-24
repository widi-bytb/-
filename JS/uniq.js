// 实现一个uniq函数，实现数组去重

/* function uniq(arr) {
  let newArr = new Set(arr);
  return newArr;
} */

/* function uniq(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (newArr.indexOf(element) === -1) {
      console.log(element);
      newArr.push(element);
    }
  });
  return newArr;
} */

function uniq(arr) {
  return arr.reduce((prev, cur) => {
   return prev.includes(cur) ? prev : [...prev, cur];
  }, []);
}

let result = uniq([1, 2, 3, 5, 3, 2]);
console.log(result);
