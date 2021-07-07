function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  let n = s.length;
  let longestPalindromeStart = 0;
  let longestPalindromeLength = 1;

  /*
    The value of dp[i][j] indicates whether the substring
    starting at index i and ending at j is a palindrome
  */
  let dp: boolean[][] = new Array(n).fill(null).map(() => Array(n).fill(true));

  /*
    dp[i+1][j-1] needs to be calculated before dp[i][j],
    hence the reason why i is decreasing while the dist
    between i and n is increasing.

    As we decrease i, we fill in the truth values of further
    down palindrome substrings, such that when we reach i=0,
    and we encounter potential palindromes, we need only check
    the cached results of previous palindrome checks
  */
  for (let i = n - 1; i >= 0; i--) {
    for (let dist = 1; dist < n - i; dist++) {
      let j = dist + i;
      dp[i][j] = s.charAt(i) === s.charAt(j) && dp[i + 1][j - 1];

      if (dp[i][j] && j - i + 1 > longestPalindromeLength) {
        longestPalindromeLength = j - i + 1;
        longestPalindromeStart = i;
      }
    }
  }

  return s.substring(
    longestPalindromeStart,
    longestPalindromeStart + longestPalindromeLength
  );
}
