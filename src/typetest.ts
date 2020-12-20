let varob: User = {
  "name": "dd",
  "age":2
}
interface User { 
  "name": string,
  "age":number
}
type F = (a: string, b: string) => void
let f: F = (a: string, b: string) => console.log(12)
f("1","b")
console.log("111", typeof varob)

let obj1 = new Object()
console.log("222", typeof obj1)
//let objj = obj1 as User
let objj = <User>obj1
//console.log("333", obj1 instanceof Object)
console.log("444", varob)
objj["age"] = 11
objj["name"]="ff"
console.log("555", objj)