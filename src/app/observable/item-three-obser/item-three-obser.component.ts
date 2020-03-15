import { SampleService } from './../../sample.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-three-obser',
  templateUrl: './item-three-obser.component.html',
  styleUrls: ['./item-three-obser.component.css']
})
export class ItemThreeObserComponent implements OnInit {

  constructor(private sampleService:SampleService ) { }

  ngOnInit() {
  }

}
