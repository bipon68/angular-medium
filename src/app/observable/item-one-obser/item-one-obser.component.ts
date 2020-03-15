import { SampleService } from './../../sample.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-one-obser',
  templateUrl: './item-one-obser.component.html',
  styleUrls: ['./item-one-obser.component.css']
})
export class ItemOneObserComponent implements OnInit {

  constructor(private sampleService:SampleService ) { }

  ngOnInit() {
  }

}
