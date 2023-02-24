// 实现一个flattenDeep函数，把嵌套的数组扁平化

/* function flattenDeep(arr,deepLength) {
  console.log(arr);
  let newArr = arr.flat(deepLength);
  return newArr;
} */

function flattenDeep(arr) {
  return arr.reduce((acc, curr) => {
    return Array.isArray(curr)
      ? acc.concat(flattenDeep(curr))
      : acc.concat(curr);
  }, []);
}

let result = flattenDeep([1, [2, [3, [4]], 5]]);
console.log(result);
