class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const bracketMap = {
      "}": "{",
      "]": "[",
      ")": "(",
    };
    const stack = [];
    for (const char of s) {
      if (bracketMap[char]) {
        const topItem = stack.pop();
        if (topItem !== bracketMap[char]) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
    return stack.length === 0;
  }
}
