'use strict';

import draw from './draw.js';

const d = document;

export default function container(board, score, btn) {
  const _board = d.querySelector(board);

  for (let i = 0; i < 200; i++) {
    const div = d.createElement('div');
    div.className = 'grid';
    _board.appendChild(div);
  }
  const _score = d.getElementById(score);
  const _btn = d.querySelector(btn);

  draw();
}
