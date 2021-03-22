function romanToInt(s: string): number {
  const romanToNumMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let i = 0;
  while (i < s.length) {
    const currentNum = romanToNumMap[s[i]];
    const nextNum = romanToNumMap[s[i + 1]];

    // Handles all 6 cases where subtraction is used
    // IV: -1 + 5 = 4
    // IX: -1 + 10 = 9
    // XL: -10 + 50 = 40
    // XC: -10 + 100 = 90
    // CD: -100 + 500 = 400
    // CM: -100 + 1000 = 900
    if (nextNum !== undefined && currentNum < nextNum) {
      total -= currentNum;
    } else {
      total += currentNum;
    }

    i++;
  }

  return total;
}
