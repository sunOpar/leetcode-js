const quickSort = require('./index')
describe('quickSort',()=>{
  test('quickSort',()=>{
    expect(quickSort([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([1,2,3,4,5,6,7,8])
    expect(quickSort([1])).toEqual([1])
  })
})
