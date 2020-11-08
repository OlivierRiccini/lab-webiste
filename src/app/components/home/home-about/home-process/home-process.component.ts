import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-process',
  templateUrl: './home-process.component.html',
  styleUrls: ['./home-process.component.scss']
})
export class HomeProcessComponent implements OnInit {
  public processes = ['idea', 'introduction', 'analysis', 'architechture', 'timeFrame', 'mvp', 'fullImplementation', 'maintenance'];
  public selectedProcess = this.processes[0];

  constructor() { }

  ngOnInit(): void {
  }

  public onSelectProcess(process: string): void {
    this.selectedProcess = process;
  }

}
