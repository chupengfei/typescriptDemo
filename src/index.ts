let a: any = 1
let obj: any = a || {}
obj.a = "11"
obj.b = 11
console.log(obj.c)