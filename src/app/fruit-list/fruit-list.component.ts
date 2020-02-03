import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fruit} from './fruit';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html'
})
export class FruitListComponent {

  @Input() fruitList: Fruit[];
  @Output() saveFruitEvent = new EventEmitter<any>();

  fruitCreationForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl()
  });

  constructor() {
  }

  onSave($event: any) {
    this.saveFruitEvent.emit($event);
  }
}
