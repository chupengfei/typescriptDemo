let a: any
let obj: any = a || {}
obj.a = "11"
obj.b = 11
console.log(obj.c) // undefind

interface Index {
  [item: number]: any
}

async function indexTest(param: Index) {
  console.log(param)
}
let param = {
  "name": "aaa",
  "age": 12
}
indexTest(param)
