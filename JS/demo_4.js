function fn() {
    getValue = function () {
      console.log(1);
    };
    return this;
  }
  fn.getValue = function () {
    console.log(2);
  };
  fn.prototype.getValue = function () {
    console.log(3);
  };
  var getValue = function () {
    console.log(4);
  };
  function getValue() {
    console.log(5);
  }
  
  //请写出以下输出结果：
  getValue();
  fn.getValue();
  getValue();
  new fn.getValue();
  new fn().getValue();
  