interface Entity { 
  length?: number,
  heigth: number,
  [sum:string]:any
}
const sum = ({ length, heigth}: Entity): number => {
  return (length ? length : 2) + heigth
}
 
console.log(sum({
  length: 1,
  heigth: 2,
  sum: 44
} as Entity));

let duixiang = {
  length: 1,
  heigth: 2,
  sum: 44
}
console.log(sum(duixiang));
