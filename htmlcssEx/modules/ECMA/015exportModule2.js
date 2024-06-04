//모듈 내보내기
//선언부에서 떨어져 내보내기

//배열내보내기
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//상수내보내기
const TABLE = 'member';

//함수내보내기
function log(message) {
  console.log(message);
}
function error(message) {
  console.log(message);
}

//클래스 내보내기
class User {
  constructor(name) {
    this.name = name;
  }
}

export { months, TABLE, log, error };
//alias로 이름바꿔 내보내기
export { User as member };
