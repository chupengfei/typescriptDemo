/**
 * success case
 */

interface User { 
  id: number,
  name: string,
  age: number
}

export async function getUser() {
  /**
   * e 遍历的元素
   * i 索引
   * arr 数组本身
   */
  userName.forEach(function (item) { 
     console.log("set length", item.length)
  })
   userArrs.forEach((e, i, arr) => {
      console.log("e => ",e, "\ni => ",i, "\narr => ",arr,"\r\n")
   })
  let map: Map<string, User> = new Map;
  await mapFunc(map)
  // 可以获取到结果
  console.log("map", map)
}

export async function mapFunc(map: Map<string, User>) {
  userArrs.map(item => map.set(item.name, item))
}


export let userArrs: User[] = [];
export let userName: Set<string> = new Set
{
  for (let i = 0; i <= 5; i++) {
    let user: User = {
      id: i + 1,
      name: `第${i + 1}梦`,
      age: 20+i
    }
    userArrs.push(user)
    userName.add("111")
  }
}

getUser()