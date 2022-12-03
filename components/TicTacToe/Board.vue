<script setup lang="ts">
import { TicTacToeSigns } from "./Cell.props";

const WINNING_CELLS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const player = ref<TicTacToeSigns>("X");

const board = ref<TicTacToeSigns[][]>([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);

const checkWinner = (board: TicTacToeSigns[]): TicTacToeSigns => {
  for (let i = 0; i < WINNING_CELLS.length; i++) {
    const [a, b, c] = WINNING_CELLS[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return "";
};

const winner = computed(() => checkWinner(board.value.flat()));

const makeMove = (x: number, y: number) => {
  if (winner.value) return;

  if (board.value[x][y]) return;

  board.value[x][y] = player.value;

  player.value = player.value === "X" ? "O" : "X";
};

const resetGame = () => {
  board.value = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  player.value = "X";
};
</script>

<template>
  <div class="tic-tac-tow__container pt-8 text-center">
    <h1 class="mb-8 text-3xl font-bold uppercase">Tic Tac Toe</h1>

    <h3
      :class="`text-xl mb-4 ${
        player === 'X' ? 'text-pink-500' : 'text-blue-400'
      }`"
    >
      Player {{ player }}'s turn
    </h3>

    <div class="flex flex-col items-center mb-8">
      <div v-for="(row, x) in board" :key="x" class="flex">
        <TicTacToeCell
          :value="cell"
          v-for="(cell, y) in row"
          :key="y"
          @click="makeMove(x, y)"
        />
      </div>
    </div>

    <div class="text-center">
      <h2
        v-if="winner"
        :class="`text-6xl font-bold mb-8 ${
          winner === 'X' ? 'text-pink-500' : 'text-blue-400'
        }`"
      >
        Player '{{ winner }}' wins!
      </h2>
      <button
        @click="resetGame"
        class="px-4 py-2 bg-pink-500 rounded uppercase font-bold hover:bg-pink-600 duration-300"
      >
        Reset
      </button>
    </div>
  </div>
</template>
