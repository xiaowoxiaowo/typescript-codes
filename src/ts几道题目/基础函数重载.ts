// 函数重载，当参数不一样时，返回出来的结果类型也不一致
function filterPersons(data: string | number, type: 'number'): number
function filterPersons(data: string | number, type: 'string'): string
function filterPersons(data: string | number, type: string) {
  return data;
}

let stringData: string = filterPersons('123', 'string');
let numberData: number = filterPersons(123, 'number');
