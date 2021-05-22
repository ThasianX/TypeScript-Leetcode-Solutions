function isIsomorphic(s: string, t: string): boolean {
  const st = new Map<string, string>();
  const ts = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    // Set mapping if one doesn't exist for current char
    st.set(sChar, st.get(sChar) ?? tChar);
    ts.set(tChar, ts.get(tChar) ?? sChar);

    // Verify current mapping for both directions align
    if (st.get(sChar) !== tChar || ts.get(tChar) !== sChar) {
      return false;
    }
  }

  return true;
}
