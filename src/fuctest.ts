import * as entity from './entity'

export const func1 =  async (name: string): Promise<any> => { 
  console.log("func1", name, entity.userArr)
  return "func1"
}

export async function func2(name: string): Promise<any> {
     console.log("func2", name, entity.userArr)
}


func1("func1 测试").then((res) => { 
    console.log("执行结束", res)
})

func2("func2 测试")