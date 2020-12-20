// 数据库单表基础数据
interface Host {
  id: number
  title: string
  uid: string | number
}
// 关联查询数据（用于页面展示）
interface HostVo extends Host{ 
  uname: string
  classifys: Classify[]
}
// 页面展示host列表 
interface Vo {
  hostList: HostVo[] 
  page?: string
}

interface Classify {
  id: number
  title: string
}

interface User {
  id: number
  name: string
  age: number
}
type VoOptional = Partial<Vo>

export async function getHostList(id: number): Promise<Vo> {
  if (id) {
    let uids: number[] = []
    let hostArr: HostVo[] = []
    let vos: VoOptional = {};
    let uMap: Map<number, string> = new Map();
    for (let index = 1; index <= 3; index++) {
      let host: Host = {
        id: index,
        title: `运动=>${index}`,
        uid: index
      }
      hostArr.push(host as HostVo)
      uids.push(host.uid as number)
    }
    let ret = await getUserList(uids.join(","))
      .catch(function () {
        return Promise.reject(ADD_COLLECTION_FAILED)
      })
    if (typeof ret != 'object') { 
      return Promise.reject(ADD_COLLECTION_FAILED)
    }
    for (const user of ret) {
      uMap.set(user.id, user.name)
    }
    hostArr.forEach(iter => { 
      if (uMap.has(iter.uid as number)) { 
        iter['uname']  = <string>uMap.get(iter.uid as number)
      }
    })
    vos.hostList = hostArr;
    console.log("vo", <Vo>vos)
    return <Vo>vos
  }
  return Promise.reject(ADD_COLLECTION_FAILED)
}

export async function getUserList(ids: string): Promise<User[]> {
  if (ids) {
    console.log("ids", ids)
    let userArr: User[] = []
    for (let index = 1; index <= 3; index++) {
      let user: User = {
        id: index,
        name: `姓名=>${index}`,
        age: 11 + index
      }
      userArr.push(user)
    }
    return userArr
  }
  return Promise.reject(ADD_COLLECTION_FAILED)
}

var ADD_COLLECTION_FAILED = {
  errno: 1014,
  errmsg: '新增收藏失败'
}

getHostList(1)