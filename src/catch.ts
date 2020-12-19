export interface Host {
  id: number,
  title: string,
  code: string | number,
  options: any
}

export type inputHost = Partial<Host>

export async function getHost(input: inputHost): Promise<any> {
  let vs: Host[] = []
  let ret = await getName(input.id as number)
    // .then(
    //   item => { 
    //     let e = item as Host
    //     console.log("item",e.title)
    //     vs.push(item)
    //   }
    // )
    .catch(error => {
      console.log(error)
    })
    
  //console.log("vs", vs[0])
  //console.log("ret", ret[0].options.title)
  for (let i of ret) {
    console.log(i.options.title)
  }
  return vs;
}

async function getName(id: number): Promise<any> {
  let vs: Host[] = [] 
  if (id === 1) {
    let a = {
      id: 1,
      title: "褚鹏飞",
      code: 11111,
      options: { "title": "帅哥", "age": 12 }
    }
    let b = {
      id: 2,
      title: "张若娜",
      code: 2222,
      options: { "title": "美女", "age": 11 }
    }
    vs.push(a)
    vs.push(b)
    console.log("111", vs[0].options.title)
    
    return vs
  } else if (id === 2) {
    return undefined;
  } else if (id ===3) { 
    return null;
  }
  return Promise.reject({"error":"错误"});
}


getHost({"id":2})