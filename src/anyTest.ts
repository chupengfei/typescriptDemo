let anyobj: any = {}
anyobj.items = [
  { "name": "afei","age":11 },
  { "name": "xueli","age":10 }
]

if (anyobj) {
  anyobj.items.forEach((item: {age:number})=> {
        console.log("item =>", item," || age =>", item.age)
   });
 }