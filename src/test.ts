import { userArrs } from "./map";

interface Host {
  id: number,
  name: string,
  age: number
}

interface Host1 { 
  name: any,
  age: number
}

export async function get(type: number): Promise<Host[]> {
  let retarr :Host[] = []
  let host1arr: Host1[] = [];
  let host1: Host1 = {
    name: "kkk",
    age: 11
  }
  host1arr.push(host1)
  for (let i of host1arr) { 
    let ret: Host = { 
      id: 1,
      name: i.name,
      age: i.age
    }
    retarr.push(ret)
  }
  if (type === 0) {
    return retarr
  }
  return Promise.reject("error ===")

}

console.log("userArrs",userArrs)


