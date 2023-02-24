// 给定一个整数数组nums和一个目标值target，在该数组中找出和为目标值的那俩个整数

const twoTarget = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
};

let nums = [2, 7, 11, 15];
let result = twoTarget(nums, 9);
console.log(result);
