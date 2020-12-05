/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

const domino = require('domino');
const fs = require('fs');
const path = require('path');

const DIST_FOLDER = join(process.cwd(), 'dist/lab-website/browser');
const template = fs.readFileSync(path.join(DIST_FOLDER, 'index.html')).toString();
const win = domino.createWindow(template.toString());
global.window = win;
global.document = win.document;
global.self = win;
global.IDBIndex = win.IDBIndex;
global.document = win.document;
global.navigator = win.navigator;
global.getComputedStyle = win.getComputedStyle;


import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { enableProdMode } from '@angular/core';

enableProdMode();

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  // const distFolder = join(process.cwd(), 'dist/lab-website/browser');
  const indexHtml = existsSync(join(DIST_FOLDER, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', DIST_FOLDER);


  if (process.env.NODE_ENV === 'production') {
    server.enable('trust proxy');
    server.use((req, res, next) => {
        if (req.secure) {
            // https request, nothing to handle
            next();
        } else {
            // this is an http request, redirect to https
            res.redirect(301, 'https://' + req.headers.host + req.url);
        }
    });
  }

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(DIST_FOLDER, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    // res.render(indexHtml, { req, providers: [{ provide: REQUEST, useValue: req }] });
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
