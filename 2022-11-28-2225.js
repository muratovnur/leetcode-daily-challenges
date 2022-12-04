/*
  2225. Find Players With Zero or One Losses (Medium)
  https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/
  
  You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

  Return a list answer of size 2 where:

  answer[0] is a list of all players that have not lost any matches.
  answer[1] is a list of all players that have lost exactly one match.
  The values in the two lists should be returned in increasing order.

  Note:

  You should only consider the players that have played at least one match.
  The testcases will be generated such that no two matches will have the same outcome.
*/

/*
  @param {number[][]} matches
  @return {number[][]}
*/

var findWinners = function(matches) {
  let res = new Map();
  matches.forEach(m => {
    if (!res.has(m[0])) {
      res.set(m[0], 0)
    }
    res.has(m[1]) ? res.set(m[1], res.get(m[1]) + 1) : res.set(m[1], 1)
  });
  const answer = [[], []];
  for (let entry of res.entries()) {
    if (entry[1] === 0) {
      answer[0].push(entry[0])
    }
    else if (entry[1] === 1) {
      answer[1].push(entry[0])
    }
  }
  answer[0].sort((a, b) => a - b);
  answer[1].sort((a, b) => a - b);
  return answer;
};

console.log(findWinners([[2,3],[1,3],[5,4],[6,4]]));
console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]));