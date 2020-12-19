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
  return host
}

let object = new Object();

let obj = {
  "code":undefined,
  "title": "kkk",
  "options": { "name": "11" }
}
get(1, obj)

