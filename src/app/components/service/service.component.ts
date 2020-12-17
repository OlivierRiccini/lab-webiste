import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit, OnDestroy {
  public serviceKey: string;
  private subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute) {
    const subscription = this.activatedRoute.params.subscribe(params => {
      const serviceName = params['serviceName'];
      if (serviceName) {
        this.serviceKey = this.serviceNameToKey(serviceName);
      }
    });
    this.subscription.add(subscription);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private serviceNameToKey(serviceName: string): string {
    const serviceKey = serviceName.split('-').map((w, index) => {
      return index === 0 ? w : w[0].toUpperCase() + w.substr(1).toLowerCase();
    }).join('').replace('-', '');
    return serviceKey;
  }

}
