interface a{
  one: string,
  two: number
}
// c为a属性中的任意一个 (只能是字符串one two)
let c: keyof a
function get(obj: keyof a) { 
    console.log(obj)
}

get("two")