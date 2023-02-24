module.exports = {
  a: 1,
  b: 2,
  c: 3,
};

exports.a = 5

console.log(module.exports);
console.log(exports);
console.log(exports === module.exports);
