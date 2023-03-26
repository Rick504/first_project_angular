import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent {
  constructor(private stateService: StateService) {}
  state: any;

  ngOnInit() {
    this.stateService.getState().subscribe((state: any) => {
      this.state = state;
    });
  }

  updateState() {
    const newState = {
      ...this.state, // copia o estado atual
      counter: this.state.counter + 1, // atualiza o valor de counter
    };
    this.stateService.setState(newState);
  }
}
