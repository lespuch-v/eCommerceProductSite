import { Component } from '@angular/core';
import {DatasService} from "./datas.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eCommercePage2';
  cartIcone = "assets/icons/cart.svg"


  constructor(public service: DatasService) {
  }
}
