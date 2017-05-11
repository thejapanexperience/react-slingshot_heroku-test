import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {chalkSuccess} from './chalkConfig';
import config from '../webpack.config.dev';
import express from 'express';
import http from 'http';
import path from 'path';

const bundler = webpack(config);
const app = express();
const server = http.createServer(app);
const port = (process.env.PORT || 4000);
console.log(chalkSuccess('Starting Express dist server...'));

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// app.use(express.static('dist/*.html'));

server.listen(port);
console.log(chalkSuccess('Express server is listening on port: ' + server.address().port));
