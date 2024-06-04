//모듈 내보내기
//선언부에서 내보내기

//배열내보내기
export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
//상수내보내기
export const TABLE = "member";

//함수내보내기
export function log(message) {
  console.log(message);
}
export function error(message) {
  console.log(message);
}

//클래스 내보내기
export class User {
  constructor(name) {
    this.name = name;
    console.log("this.name", this.name);
  }
}
