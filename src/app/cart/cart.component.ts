import { Component, OnInit } from '@angular/core';
import {DatasService} from "../datas.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartImage: string = "/assets/images/icon-cart.svg"
  constructor(public service: DatasService) { }

  ngOnInit(): void {
  }

}
