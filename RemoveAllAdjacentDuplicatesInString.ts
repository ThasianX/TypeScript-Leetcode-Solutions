function removeDuplicates(S: string): string {
  let letters: string[] = [];

  for(let letter of S) {
    if(letters[letters.length-1] === letter) {
      letters.pop();
    } else {
      letters.push(letter);
    }
  }

  return letters.join('');
};
