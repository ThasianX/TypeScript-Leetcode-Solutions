const start = "a".charCodeAt(0);

function countCharacters(words: string[], chars: string): number {
  let count = 0;
  const charFrequencies = formCharFrequencies(chars);

  for (let word of words) {
    // Spread the frequencies array to maintain the source of truth
    if (isWordValid(word, [...charFrequencies])) {
      count += word.length;
    }
  }

  return count;
}

// Indexes characters of a-z with indices 0-26
const formCharFrequencies = (chars: string): number[] => {
  let arr = new Array(26).fill(0);

  for (let i = 0; i < chars.length; i++) {
    arr[chars.charCodeAt(i) - start]++;
  }

  return arr;
};

const isWordValid = (word: string, charFrequencies: number[]): boolean => {
  for (let i = 0; i < word.length; i++) {
    charFrequencies[word.charCodeAt(i) - start]--;

    if (charFrequencies[word.charCodeAt(i) - start] < 0) {
      return false;
    }
  }

  return true;
};
