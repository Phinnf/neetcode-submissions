class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      const cleanString = s
      .replaceAll(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
      .trim();
    const reverseString = cleanString.split("").reverse().join("");
    return reverseString === cleanString;
    }
}
