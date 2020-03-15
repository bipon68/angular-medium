import { SampleService } from './../../sample.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-two-obser',
  templateUrl: './item-two-obser.component.html',
  styleUrls: ['./item-two-obser.component.css']
})
export class ItemTwoObserComponent implements OnInit {

  constructor(private sampleService:SampleService ) { }
  

  text$:Observable<string>;

  ngOnInit() {
    this.text$=this.sampleService.getData();

  }


}
