import {Component, OnInit} from '@angular/core';
import {FruitsService} from '../fruits.service';
import {Observable} from 'rxjs';
import {Fruit} from '../fruit-list/fruit';

@Component({
  selector: 'app-fruits-section',
  templateUrl: './fruits-section.component.html'
})
export class FruitsSectionComponent implements OnInit {
  private fruitListState: Fruit[];

  constructor(private fruitsService: FruitsService) {
  }

  ngOnInit() {
    this.fruitsService.getAll().subscribe(fruits => this.fruitListState = fruits);
  }

  onSave($event: any) {
    this.fruitsService.create($event as Fruit);
  }
}
