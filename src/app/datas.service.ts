import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  isModalActive: boolean = false
  imageNumberId: number = 0
  priceBeforeSale: number = 0
  counter: number = 0


  imageArr = [
    "assets/images/image-product-1.jpg",
    "assets/images/image-product-2.jpg",
    "assets/images/image-product-3.jpg",
    "assets/images/image-product-4.jpg"
  ]
  activeImage: string = this.imageArr[this.imageNumberId]

  productInfo = {
    title: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.",
    price: 125.00,
    sale: "50%",
  }


  constructor() {
    this.calculateNewPrice()
  }
  calculateNewPrice(){
    let price = this.productInfo.price * 100 / 50
    this.priceBeforeSale = price
  }

  cartHandleClick() {
    this.isModalActive = !this.isModalActive
  }

  setActive($event: any) {
    this.activeImage = this.imageArr[$event.target.id]
  }
  add(){
    this.counter = this.counter + 1
  }
  subtract(){
    this.counter = this.counter - 1
    if(this.counter <=0){
      this.counter = 0
    }
  }
}
