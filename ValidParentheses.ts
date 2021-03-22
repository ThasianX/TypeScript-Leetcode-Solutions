class Stack<T> {
  private store: T[] = [];

  push = (val: T) => {
    this.store.push(val);
  };

  pop = (): T | undefined => {
    return this.store.pop();
  };

  get length() {
    return this.store.length;
  }
}

const closedToOpenParentheses: Record<string, string> = {
  ")": "(",
  "}": "{",
  "]": "[",
};

// n: length of `s`
// Space: O(n) - every character in `s` is an open parentheses
// Time: O(n) - every character in `s` is an open parentheses

function isValid(s: string): boolean {
  const parentheses = new Stack<string>();

  for (let c of s) {
    const openParentheses = closedToOpenParentheses[c];
    // `c` is an open parentheses
    if (openParentheses === undefined) {
      parentheses.push(c);
      // `c` is a closed parentheses
    } else if (parentheses.pop() !== openParentheses) {
      return false;
    }
  }

  // `s` is valid only if all open parentheses have been properly closed
  return parentheses.length === 0;
}
