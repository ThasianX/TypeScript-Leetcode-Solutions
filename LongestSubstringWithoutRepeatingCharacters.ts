function lengthOfLongestSubstring(s: string): number {
  let absoluteMax = 0;
  let lastSeenIndex = 0;
  let lastSeen = new Array(256);

  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i);
    if (lastSeen[charIndex]) {
      /* 
        Accounts for the case where the last seen index
        for the current char may be less than the last
        seen index of a previous char.

        s = "abbba"
        When we get to the 2nd 'a', its last seen index will
        be 0. However, the last seen index for 'b' is 2 and
        we should therefore use that as the starting point
        for the new string, which would make it a substring
        instead of a subsequence.
      */
      lastSeenIndex = Math.max(lastSeenIndex, lastSeen[charIndex]);
    }

    absoluteMax = Math.max(absoluteMax, i - lastSeenIndex + 1);
    lastSeen[charIndex] = i + 1;
  }

  return absoluteMax;
}
