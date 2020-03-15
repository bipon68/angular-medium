import { Component, OnInit } from '@angular/core';
import { LogoItem } from './items.model';
import {DUMMY_LOGOS} from './items.data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  
  public logos: LogoItem[] = DUMMY_LOGOS;
  

  constructor() { }

  ngOnInit() {
  }



}
