function isAnagram(s: string, t: string): boolean {
  if(t.length !== s.length) {
    return false;
  }

  const letterCounts: Record<string, number> = {};
  for(let letter of t) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }

  for(let letter of s) {
    if(letterCounts[letter]) {
      letterCounts[letter] = letterCounts[letter] - 1;
    } else {
      return false;
    }
  }

  return true;
};
