const lengthOfLongestSubstring = s => {
  let maxLength = 0;
  const stringSet = new Set();
  const { length } = s;
  for (let i = 0; i < length - maxLength; i++) {
    let accumulate = 0;
    stringSet.clear();
    for (let j = i; j < length; j++) {
      stringSet.add(s[j]);
      if (stringSet.size > accumulate) {
        accumulate++;
        if (accumulate > maxLength) {
          maxLength = accumulate;
        }
      } else {
        break;
      }
    }
  }
  return maxLength;
};
module.exports = lengthOfLongestSubstring;
