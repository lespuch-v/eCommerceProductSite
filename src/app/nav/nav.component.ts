import { Component, OnInit, ViewEncapsulation } from '@angular/core';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent implements OnInit {
  logoImage: string = "assets/images/logo.svg"
  profileImage: string = "assets/images/image-avatar.png"





  constructor() { }

  ngOnInit(): void {
  }

}
