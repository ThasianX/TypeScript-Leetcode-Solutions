const parenthesesMappings: Record<string, string> = {
  ")": "(",
  "}": "{",
  "]": "["
}

class Stack<T> {
  _store: T[] = [];
  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.pop();
  }
  isEmpty(): boolean {
    return this._store.length === 0;
  }
}

function isValid(s: string): boolean {
  const stack = new Stack<string>();
  
  for(let c of s) {
    const openingParentheses = parenthesesMappings[c];
    if(openingParentheses) {
      if(stack.pop() !== openingParentheses) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  
  return stack.isEmpty();
};
