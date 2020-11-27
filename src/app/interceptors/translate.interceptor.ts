
// https://itnext.io/angular-universal-how-to-add-multi-language-support-68d83f6dfc4d

import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import * as express from 'express';

@Injectable()
export class TranslateInterceptor implements HttpInterceptor {
  private readonly DEFAULT_PORT = 4200;
  private readonly PORT = process.env.PORT || this.DEFAULT_PORT;

  constructor(@Inject(REQUEST) private request: express.Request) {
  }

  getBaseUrl(req: express.Request) {
    const { protocol, hostname } = req;
    return `${protocol}://${hostname === 'localhost' ? hostname + ':' + this.PORT : hostname}`;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // TODO: uncomment when done with transaltions
    // const processLang = process.env.LC_ALL || process.env.LC_MESSAGES || process.env.LANG || process.env.LANGUAGE;
    // const defaultLang = processLang && processLang.includes('fr') ? 'fr' : 'en';
    const defaultLang = 'en';
    if (request.url.startsWith('./assets')) {
      const baseUrl = this.getBaseUrl(this.request);
      request = request.clone({
        url: `${baseUrl}/${request.url.replace('./assets', 'assets').replace('serverLangPlaceholder', defaultLang)}`
      });
    }
    return next.handle(request);
  }
}
