function reverseInteger(x) {
  const result =
    parseInt(
      Math.abs(x)
        .toString()
        .split('')
        .reverse()
        .join(''),
    ) * Math.sign(x);
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }
  return result;
}
module.exports = reverseInteger;
