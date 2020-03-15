import { Student } from './../student.data';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() value: number;

  public students: Student[];

  constructor() { 
    this.students = [
      {
        "firstName": "Bipon",
        "lastName": "Biswas",
        "age": 27,
        "teacher": "Anupon Bairagi"
      },
      {
        "firstName": "Mahfuz",
        "lastName": "Shazol",
        "age": 25,
        "teacher": "Tapon Mallik"
      },
      {
        "firstName": "Mrinmoy",
        "lastName": "Kor",
        "age": 21,
        "teacher": "Zahid"
      }
    ]
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any){
    console.log('List Child Component Property Changes:' + changes['value'].currentValue)
  }

}
