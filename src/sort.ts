import { userArr, User } from "./entity"

console.log("排序前",userArr)

let vo = userArr;
// 指定属性排序
vo.sort((a, b) => b.age - a.age)
console.log("排序后",vo)
// 数组截取前两个
let v: User[] = vo.slice(0, 2)

console.log("截取后", v)
console.log(v[1].age)
console.log("截取前",userArr)