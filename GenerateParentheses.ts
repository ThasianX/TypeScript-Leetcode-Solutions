function generateParenthesis(n: number): string[] {
  let parenthesis: string[] = [];
  backtrack(parenthesis, "", 0, 0, n);
  return parenthesis;
}

const backtrack = (
  parenthesis: string[],
  str: string,
  openParentheses: number,
  closeParentheses: number,
  max: number
) => {
  if (str.length === max * 2) {
    parenthesis.push(str);
    return;
  }

  /*
    Any valid combination must always start with an open parentheses.
    At subsequent recursive steps, we can choose to either
    add an open or close parentheses depending on if the max of either
    has been reached
  */
  if (openParentheses < max) {
    backtrack(
      parenthesis,
      str + "(",
      openParentheses + 1,
      closeParentheses,
      max
    );
  }

  if (closeParentheses < openParentheses) {
    backtrack(
      parenthesis,
      str + ")",
      openParentheses,
      closeParentheses + 1,
      max
    );
  }
};
