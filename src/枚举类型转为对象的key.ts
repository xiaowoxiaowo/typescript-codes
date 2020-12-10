/**
 * IdType是枚举的key，不但在CountData需要用。下面的getCountNum方法中的data是一个以这些
 * 枚举值作为key值的对象
 * 
 * 这里的核心是Record方法
 */
type IdType = 'newCustomerCount' | 'callCoverageCount' | 'newBusinessOpportunityCount'
| 'newSignCustomerCount' | 'renewalCustomerCount' | 'enterCustomerCount' | 'outCustomerCount';

interface CountData {
  id: IdType
  name: string
  val: number
}

const initData: CountData[] = [
  { id: 'newCustomerCount', name: '新增客户', val: 0 },
  { id: 'callCoverageCount', name: '通话覆盖', val: 0 },
  { id: 'newBusinessOpportunityCount', name: '新增商机', val: 0 },
  { id: 'newSignCustomerCount', name: '新签客户', val: 0 },
  { id: 'renewalCustomerCount', name: '续签客户', val: 0 },
  { id: 'enterCustomerCount', name: '进库客户', val: 0 },
  { id: 'outCustomerCount', name: '出库客户', val: 0 }
];

const getCountNum = (target: CountData[], data: Record<IdType, string | number>) => {
  const newTarget = [...target];
  newTarget.forEach((item: CountData) => {
    item.val = Number(data[item.id]);
  });
  return newTarget;
};
