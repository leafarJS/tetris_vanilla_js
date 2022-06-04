'use strict';

import container from './container.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  container('.container', 'score', '.btn');
});
