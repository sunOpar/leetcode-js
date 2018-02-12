function reverseInteger(number) {
  if (Math.abs(number) < 10) {
    return number;
  }
  const strLikeNum = String(number);
  let strLikeResult = '';
  for (let i = strLikeNum.length - 1; i >= 0; i--) {
    const element = strLikeNum[i];
    if (Number.isNaN(+element)) {
      strLikeResult = element + strLikeResult;
    } else {
      strLikeResult += element;
    }
  }
  const result = Number(strLikeResult);
  
  if (result < -2147483648 || result > 2147483647) {
    return 0;
  }
  return Number(strLikeResult);
}
module.exports = reverseInteger;
