/*
  1704. Determine if String Halves Are Alike (Easy)
  https://leetcode.com/problems/determine-if-string-halves-are-alike/description/

  You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

  Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

  Return true if a and b are alike. Otherwise, return false.
*/

/*
 @param {string} s
 @return {boolean}
*/
var halvesAreAlike = function(s) {
   const vowels = ['a', 'i', 'e', 'o', 'u'];
   s = s.toLowerCase();
   let result = 0;
   for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) result++;
   }
   for (let i = s.length / 2; i < s.length; i++) {
    if (vowels.includes(s[i])) result--;
   }
   return result === 0;
};

console.log(halvesAreAlike('book'));
console.log(halvesAreAlike('textbook'));