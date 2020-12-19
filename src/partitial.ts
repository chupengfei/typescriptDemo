export interface Host {
  id: number,
  title: string,
  code: string | number,
  options: any
}

export type inputHost = Partial<Host>


export async function get(uid: number, input: inputHost): Promise<Host> {
  let obj: any = {}
  console.log("input:", input)
  console.log(typeof input.options)
  if (input.code) {
    obj['code'] = input.code
  }
  if (input.title) {
    obj['title'] = input.title
  }
  if (input.options) {
    let options: any = {}
    options['name'] = input.options.name
    obj['options'] = options
  }
  let host= obj as Host;
  console.log("output", host)
  if (uid ==1) {
    return host
  }
  return Promise.reject(undefined)
}

let object = new Object();

let obj = {
  "code":undefined,
  "title": "kkk",
  "options": { "name": "11" }
}
let ret = get(2, obj).catch(err=>console.log(err));
console.log("22",typeof ret)

