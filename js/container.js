'use strict';
const d = document;

export default function container(board) {
  const _board = d.querySelector(board);

  for (let i = 0; i < 200; i++) {
    const div = d.createElement('div');
    div.className = 'grid';
    _board.appendChild(div);
  }
}
