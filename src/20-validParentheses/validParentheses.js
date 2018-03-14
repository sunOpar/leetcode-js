/**
 * @param {string} s
 * @return {boolean}
 * 利用栈解决该问题
 */
var isValid = function(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    let isTrue = true;
    const element = s[i];
    switch (element) {
      case "(":
        arr.push("(");
        break;
      case "[":
        arr.push("[");
        break;
      case "{":
        arr.push("{");
        break;
      case ")":
        if (arr[arr.length - 1] === "(") {
          arr.pop();
        } else {
          isTrue = false;
        }
        break;
      case "]":
        if (arr[arr.length - 1] === "[") {
          arr.pop();
        } else {
          isTrue = false;
        }
        break;
      case "}":
        if (arr[arr.length - 1] === "{") {
          arr.pop();
        } else {
          isTrue = false;
        }
        break;
    }
    if (isTrue === false) {
      return false;
    }
  }
  if (arr.length === 0) {
    return true;
  }else{
    return false;
  }
};
module.exports = isValid;
