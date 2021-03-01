function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let str = word1.join("");
  let arrIndex = 0;
  let strIndex = 0;

  while (arrIndex < word2.length) {
    const currentWord = word2[arrIndex];
    const isCurrentWordASubstring =
      str.substring(strIndex, strIndex + currentWord.length) === currentWord;
    if (!isCurrentWordASubstring) {
      return false;
    }
    strIndex += currentWord.length;
    arrIndex += 1;
  }

  // Accounts for the case where `str` is actually a longer string than the
  // joined characters of `word2`. ie `str = "abcdef"` and `word2 = ["abcd"]`
  return strIndex === str.length;
}
