import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private scroll: BehaviorSubject<string>;
  public scroll$: Observable<string>;

  constructor(private route: ActivatedRoute) {
    this.scroll = new BehaviorSubject(null);
    this.scroll$ = this.scroll.asObservable();
  }

  public scrollTo(target: string): void {
    this.scroll.next(target);
  }

}
