// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import {chalkProcessing} from './chalkConfig';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  port: (process.env.PORT || 4000),
  ui: {
    port: (process.env.PORT2 || 4001)
  },
  server: {
    baseDir: 'dist'
  },

  files: [
    // 'dist/*.html'
    'src/*.html'
  ],

  middleware: [historyApiFallback()]
});
