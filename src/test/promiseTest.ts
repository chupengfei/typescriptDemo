function iReturnPromiseAfter1Second():Promise<string> {
  return new Promise((resolve)=>{
      setTimeout(()=>resolve("Hello world!"), 1000);
  });
}

Promise.resolve(123)
  .then((res) => {
    console.log(res);
       // res is inferred to be of type `number`
       return iReturnPromiseAfter1Second();
  })
  .then((res) => {
      // res is inferred to be of type `string`
      console.log(res); // Hello world!
  });
