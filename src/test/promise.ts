 function get(a: number): Promise<string> { 
   // 异步执行
  new Promise((resolve, error) => { 
     // 1
    console.log("aaaaa")
     setTimeout(() => {
      console.log("bbbbb")
     }, 5000);
  })
  new Promise((resolve, error) => { 
    // 1
   console.log("ccc")
    setTimeout(() => {
     console.log("iii")
    }, 500);
 })
    // 2
   return new Promise((resolve, error) => { 
    resolve(`${a}kkk`)
  })
  //return "kk"
}

let s = get(2)
s.then(
  // 3
  function (resolve) {
    console.log(resolve,"bbb")
  }
  // 4
).then(
  (a) => { 
    return new Promise((resolve, error) => {
          console.log(a,"fff")
          resolve("dddd")
     })
  }
  // 5
).then(function (d) { 
  console.log(d)
})

/**
aaaaa
2kkk bbb
undefined fff
dddd
bbbbb
 */

