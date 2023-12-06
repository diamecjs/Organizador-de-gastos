// vite.config.js
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';

export default {
  plugins: [react()],

  resolve: {
    alias: {
      'firebase/auth': 'firebase/auth',
    },
  },
};
