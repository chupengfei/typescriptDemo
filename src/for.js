// Array.prototype.method=function(){
//   　　console.log(this.length);
//   }
var myArray = [1, 2, 4, 5, 6, 7]
//myArray.name="数组"
for (var index in myArray) {
  
  console.log(myArray[index]);
}
for (var index of myArray) {
  
  console.log(myArray[index]);
}
// Object.prototype.method=function(){
//   　　console.log(this);
//   }
  // var myObject={
  // 　　a:1,
  // 　　b:2,
  // 　　c:3
  // }
  // for (var key in myObject) {
  //   console.log(key);
  // }