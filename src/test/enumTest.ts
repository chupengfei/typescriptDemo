enum Type { 
  FIRST = 0,
  SECOND = 1,
  THREE = 2
}

for (const key in Type) {
  // if (1 === Type.SECOND) { 
  //     console.log("right")
  // }
  console.log(key,"typeof",typeof key)
}

var b1: number = 1;
console.log('111',typeof (b1.toString))

var d2: Array<number> = [1, 2, 34];
console.log(typeof d2)
console.log("kk", typeof undefined == 'object')
console.log('=================================')

async function compareEnum(num:number) {
  let flag: boolean = false;
  for (let value in Type) {
    console.log(value)
    if (Number(value) === num) { 
      flag = true
      break
    }
  }
  if (flag) {
     console.log("有问题")
  }
}

compareEnum(1)

console.log(typeof Number("kklkj"))

let value: any = {}
value['addressBookVersion'] = Date.parse(new Date().toString())
console.log(value)