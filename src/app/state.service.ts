import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private initialState = {
    counter: 0,
    nomeTeste: 'Valor vindo do State',
  };
  private state = new BehaviorSubject<any>(this.initialState);

  getState() {
    return this.state.asObservable();
  }

  setState(newState: any) {
    this.state.next(newState);
  }
}
