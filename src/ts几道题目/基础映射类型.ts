interface User {
  name: string
  age: number
  occupation: string
}
// 把类型子项变成可选
type Criteria = {
  [K in keyof User]?: User[K]
}

// 也可以使用自带的Partial，Partial会遍历这个类型所有的子项