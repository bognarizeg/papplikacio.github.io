import { Component } from '@angular/core';
import { CarsPage } from '../cars/cars.page';
import { Tab2Page } from '../tab2/tab2.page';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
 
  tab2Root = CarsPage;
  constructor() {}

}
