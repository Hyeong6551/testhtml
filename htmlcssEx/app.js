var Person = function (name) {
  this.name = name;
};

Person.prototype.getName = function () {
  return this.name;
};

var test = new Person("test");

// exports.test = test; //즉 접근자를 사용.

module.exports = test;
console.log(module);
console.log(module.exports);

//module.exports와 exports는 서로 어떤 관계일까요?
//사실 exports는 call by reference로 module.exports를 바라보고 있고,
//리턴되는 값은 항상 module.exports입니다.
/**
 var module = {
	exports: {}
};
var exports = module.exports;

return module.exports;
 */
