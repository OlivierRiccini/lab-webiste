import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ServiceNameResolve implements Resolve<string> {

  constructor() {}

  resolve(route: ActivatedRouteSnapshot) {
    const serviceNameUrl = route.params && route.params['serviceName'] ? route.params['serviceName']: 'Service';
    const formattedName = serviceNameUrl.split('-').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ');
    return `${formattedName} | Blockbrainers`;
  }
}