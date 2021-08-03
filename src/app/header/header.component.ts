import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'micro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = 'Betsy Delos Angeles'
  marcura = assetUrl("Marcura-logo-blk.png")

  constructor() { }

  ngOnInit() {
  }

}
