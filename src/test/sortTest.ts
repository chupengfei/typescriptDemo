let arr: number[] = [3, 1, 6, 7, 22, 12]
let arrnew = arr.map(item => item + 1)
console.log("arr", arr, "arrnew", arrnew)

let arrnew1 = arr.sort((a, b) => b - a)
console.log("arr", arr, "arrnew1", arrnew1)
