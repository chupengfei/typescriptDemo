export interface User { 
  id: number,
  name: string,
  age: number
}

export let userArr: User[] = []
{
  userArr.push({"id":1, "name": "张若娜", "age": 30})

  userArr.push({ "id": 2, "name": "褚鹏飞", "age": 33 })
  
  userArr.push({ "id": 3, "name": "褚样样", "age": 31 })
  
  userArr.push({"id":4, "name": "褚曦月", "age": 5})

  userArr.push({"id":5, "name": "刘俊枝", "age": 54})
}