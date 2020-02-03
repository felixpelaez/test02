import {Component, Input, OnInit} from '@angular/core';
import {Fruit} from '../fruit-list/fruit';
import {FruitsService} from '../fruits.service';

@Component({
  selector: 'app-fruits-statistics',
  templateUrl: './fruits-statistics.component.html'
})
export class FruitsStatisticsComponent {

  @Input() fruitList: Fruit[];
  private lastDayAverage: number;

  get average() {
    let total = 0;
    this.fruitList.forEach(fruit => total = total + Number(fruit.price));

    return total / this.fruitList.length;
  }

  get incrementOfAverageRespectLastWorkingDay() {
    this.fruitsService.getLastWorkingDayAverage().subscribe(average => this.lastDayAverage = average);

    return ((this.average - this.lastDayAverage) / this.lastDayAverage);
  }

  constructor(private fruitsService: FruitsService) {
  }

}
