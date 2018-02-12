const mergeSort = require('./index')
describe('mergeSort',()=>{
  test('mergeSort',()=>{
    expect(mergeSort([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([1,2,3,4,5,6,7,8])
    expect(mergeSort([1])).toEqual([1])
  })
})