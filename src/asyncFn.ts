async function step1(params: string): Promise<string> {
  return new Promise(res => {
    console.log("aaaa")
    // setTimeout(() => {
    //   console.log("1秒后执行")
    // }, 100);
  });
}



(async function () {
  await step1("")
  console.log("kkkkkkkkk")
   await step1("")
}
)()

function step2(){
  console.log("bbbb")
  setTimeout(() => {
      console.log("1秒后执行")
  }, 1000);
  console.log("ccc")
}

step2()