function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  // The index of the array corresponds to respective letters
  const digitToLetters = [
    "0",
    "1",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const start = "0".charCodeAt(0);

  let combination = [""];

  for (let i = 0; i < digits.length; i++) {
    let newCombination: string[] = [];
    const letters = digitToLetters[digits.charCodeAt(i) - start];

    for (let letterA of combination) {
      for (let letterB of letters) {
        newCombination.push(letterA + letterB);
      }
    }

    combination = newCombination;
  }

  return combination;
}
