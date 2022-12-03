const WINNING_INDEX_COMBOS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const hasWinner = (board: number[]) => {
  const isWinningCombo = (combo: number[]) => {
    const playerSymbols = combo.map((index: number) => board[index]);

    return playerSymbols.every(
      (symbol: number) => symbol !== null && symbol === playerSymbols[0]
    );
  };

  return WINNING_INDEX_COMBOS.map(isWinningCombo).some(
    (winner) => winner === true
  );
};
