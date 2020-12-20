let y:number

//y = null		// 无法通过编译
//y = undefined
//y = null!
y = undefined!
console.log("y", y)

interface IDemo {
  x?: number
}

// 编译报错，不能赋值给可选属性
const demo = (parma: IDemo) => {
  parma.x = 1	
}