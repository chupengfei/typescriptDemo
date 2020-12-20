enum Type { 
  FIRST = 0,
  SECOND = 1,
  THREE = 2
}

for (const key in Type) {
  // if (1 === Type.SECOND) { 
  //     console.log("right")
  // }
  console.log(key)
}

var b1: number = 1;
console.log(typeof b1)

var d2: Array<number> = [1, 2, 34];
console.log(typeof d2)