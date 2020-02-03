import {BehaviorSubject, of} from 'rxjs';
import {Fruit} from './fruit-list/fruit';
import {delay} from 'rxjs/operators';

export class FruitsService {

  private httpClientFake: HttpClientFake;

  constructor() {
    this.httpClientFake = new HttpClientFake();
  }

  getAll() {
    return this.httpClientFake.retrieveFruits();
  }

  getLastWorkingDayAverage() {
    return this.httpClientFake.retrieveLastWorkingDayAverage();
  }

  create(fruit: Fruit) {
    this.httpClientFake.create(fruit);
  }
}

class HttpClientFake {

  private idCounter = 5;

  private fruitListState: BehaviorSubject<Fruit[]> = new BehaviorSubject<Fruit[]>([
    {id: 1, name: 'apple', price: 50},
    {id: 2, name: 'lemon', price: 40.5},
    {id: 3, name: 'orange', price: 30.5},
    {id: 4, name: 'banana', price: 5}
  ]);

  retrieveFruits() {
    return this.fruitListState.asObservable();
  }

  retrieveLastWorkingDayAverage() {
    console.log('slow call');
    return of(28)
      .pipe(delay(5000)); // This simulate a slow call to the backend.
  }

  create(fruit: Fruit) {
    this.fruitListState.next([
      ...this.fruitListState.getValue(),
      {...fruit, id: this.idCounter++}
    ]);
  }
}
