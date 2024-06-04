// 해당 모듈에는 개체가 하나만 있다.
// export default
// 가져오기에서 default 모듈일 경우 중괄호없이 가져오기 할수 있다.

//클래스 내보내기
// export default class User {
//익명으로 내보내기 해도 무관
export default class {
  constructor(name, hobby = "swimming", food = "kimchi") {
    this.name = name;
    this.hobby = hobby;
    this.food = food;
    console.log("this.name", this.name);
  }
  mycar = function (type, year, color) {
    this.type = type;
    this.year = year;
    this.color = color;
  };
}
