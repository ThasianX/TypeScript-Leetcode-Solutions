function reverseWords(s: string): string {
  let reversedWords: string[] = [];
  let currentChars: string[] = [];

  for (let c of s) {
    if (c === " ") {
      reversedWords.push(reverse(currentChars));
      currentChars = [];
    } else {
      currentChars.push(c);
    }
  }

  reversedWords.push(reverse(currentChars));

  return reversedWords.join(' ');
};

function reverse(chars: string[]): string {
  return chars.reverse().join('');
}
