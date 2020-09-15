interface Row {
  index: number;
  soldiers: number; 
}

function kWeakestRows(mat: number[][], k: number): number[] {
  return mat
    .map((row: number[]) => row.reduce((n1, n2) => n1+n2))
    .map((value: number, index: number) => ({index: index, soldiers: value}))
    .sort((row1: Row, row2: Row) => {
      if(row1.soldiers === row2.soldiers) {
        return row1.index - row2.index;
      }
      return row1.soldiers - row2.soldiers;
    })
    .slice(0, k)
    .map((row: Row) => row.index);
};
