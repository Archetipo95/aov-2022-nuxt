<script setup lang="ts">
import { hasWinner } from "./Utils";

const board = ref(Array(9).fill(null));

const currentPlayer = ref(Math.round(Math.random()));

const someoneHasWon = computed(() => hasWinner(board.value));
const isDraw = computed(
  () => !someoneHasWon.value && board.value.every((cell) => cell !== null)
);
const isGameOver = computed(() => someoneHasWon.value || isDraw.value);

const otherPlayer = (player: number) => Math.abs(player - 1);

const getStatusMessage = computed(() =>
  someoneHasWon.value
    ? `<span class="material-symbols-outlined text-[60px]">
        ${otherPlayer(currentPlayer.value) ? "circle" : "close"}
      </span> has won!`
    : isDraw.value
    ? "It's a draw!"
    : `It's <span class="material-symbols-outlined ml-1">
        ${currentPlayer.value ? "circle" : "close"}
      </span>'s turn.`
);

const markCell = (index: number) => {
  if (isGameOver.value || board.value[index] !== null) return;

  board.value[index] = currentPlayer.value;
  currentPlayer.value = otherPlayer(currentPlayer.value);
};

const resetGame = () => {
  currentPlayer.value = Math.round(Math.random());
  board.value = Array(9).fill(null);
};
</script>

<template>
  <div class="tic-tac-tow__container pt-8 text-center">
    <h1 class="mb-8 text-3xl font-bold uppercase">Tic Tac Toe</h1>

    <h3
      v-if="!isGameOver"
      :class="`text-xl justify-center flex items-center mb-4 ${
        currentPlayer ? 'text-pink-500' : 'text-blue-400'
      }`"
      v-html="getStatusMessage"
    ></h3>

    <div class="inline-grid grid-cols-3 gap-0 mb-8">
      <TicTacToeCell
        v-for="(cellValue, index) in board"
        :value="cellValue"
        @click="markCell(index)"
        class="col-span-1"
      />
    </div>

    <div v-if="isGameOver" class="text-center">
      <h2
        :class="`text-6xl font-bold mb-8 ${
          !currentPlayer ? 'text-pink-500' : 'text-blue-400'
        }`"
        v-html="getStatusMessage"
      ></h2>
      <button
        @click="resetGame"
        class="px-4 py-2 bg-pink-500 rounded uppercase font-bold hover:bg-pink-600 duration-300"
      >
        Reset
      </button>
    </div>
  </div>
</template>
