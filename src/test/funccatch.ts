export async function getProfile(uid: number): Promise<any> {

  let v: any;
  let object = await getUserInfo(uid).catch(error => {
    console.log(error)
    return error
  })
  v = {
    id: uid,
    nick: object.nick || 'U' + uid,
    name: object.name,
    logo: object.logo,
    code: object.code,
    bgimage: object.bgimage,
    QRcode: object.QRcode,
    signature: object.signature,
  }
  console.log("wobuying")
  return v
}

export async function getUserInfo(uid: number): Promise<any> {
  let object = await db(uid).catch(function () {
    console.log("getUserInfo")
    return Promise.reject(ERROR_NOT_FOUND_USER)
  })
  if (typeof object != 'object' || !object) {
    object = {}
  }
  console.log("wobu")
  return object
}

async function db(i: number): Promise<any> {
  if (i === 1) {
    console.log("db")
    return Promise.reject("...")
  }
}

export var ERROR_NOT_FOUND_USER = {
  errno: 1001,
  errmsg: '未找到用户'
}



async function a() { 
  await getProfile(1).then(res => {
    //.then是接收正确返回的信息
    console.log(res)
  }).catch(err => { console.log(err) })
}
a()