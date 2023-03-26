import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  state: any;
  constructor(private stateService: StateService) {}
  ngOnInit() {
    this.stateService.getState().subscribe((state: any) => {
      this.state = state;
    });
  }
}
