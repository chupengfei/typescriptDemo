import { get } from "./test"

// type Add = (a: number, b: string) => string;

// let plus: (a: number, b: string) => string;

// let add: Add = (x, y) => x + y
// function kkk(x: number, y: number): Add{
//   return add
// }
// kkk(22,11)
// console.log("88:", add(1, "c"));


// async function hello(): Promise<string> {
//   return "hello1";
// }

let p = get(1).then(value => {
  console.log(value[0])
}).catch(error => {
  console.log(error)
}).then(
  error => {
    console.log(222)
}).then(
  error => {
    console.log(333)
}).catch(
  error => {
    console.log(444)
})

p.then(value => {
  console.log(111)
})
