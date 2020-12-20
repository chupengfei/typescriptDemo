

export async function get(uid:string, type?:number[]):Promise<any> {
  let a = type?.join(",") || null
  console.log("a", a)
}

get("1")

