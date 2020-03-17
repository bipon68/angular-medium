import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SampleService } from './sample.service';
import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
// import {Http, Response} from '@angular/http';
import { ItemList } from './model';
import { MessageProvider } from './test.message';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {

    public dependencyTitle: string;
    messages: string[] = [];
    public currentValue:number = 3;

    color: string;
    public count : number = 2;
    public indicator : boolean = true;
    public nameList : string[] = ['Bipon', 'Arif', 'Mahfuz'];
    public title : string = 'Template Binding';

    public showPanel: boolean = true;

    public name: string;

    public biponIP: string;
    public json: any;
    dataItems2:ItemList[]=[];

    constructor(
      private sampleService:SampleService, 
      private _messageProvider: MessageProvider, private httpclient: HttpClient) {  
      // this.getIPAddress()
          // ipvalue => this.biponIP = ipvalue.json().origin;
          // this.dependencyTitle = _messageProvider.getMessage();
          this.getDummyApiData2()
            .subscribe(res => {
              this.dataItems2 = res;
          });

        this.getDummyApiData();
    }
    ngOnInit(){
      this.messages.push('OnInit');
    }
    ngAfterContentInit(){
      this.messages.push('AfterContentInit');
    }
    ngAfterViewInit(){
      this.messages.push('AfterViewInit')
    }

    // private getSubApiData(): Observable<Response>{
    //   return this.http.get('https://jsonplaceholder.typicode.com/posts') 
    // }

    // private getIPAddress() {
    //   // return this.http.get('http://httpbin.org/ip')
    //   this.http.get('https://jsonplaceholder.typicode.com/posts')
    //     .toPromise()
    //     .then(response => this.biponIP = response.json())
    //     .then(json => console.log(this.biponIP))
    //     .catch(error => console.log(error))
    // }

    //Service with method calling itemList endpoint:
    private getDummyApiData2() : Observable<ItemList[]> {
      // return this.http.get('http://httpbin.org/ip')
     return this.httpclient.get<ItemList[]>('https://jsonplaceholder.typicode.com/posts');
    }

   dataItems:ItemList[]=[];
  //  dataItems$:Observable<ItemList[]>;

    private getDummyApiData(){
      // this.http.get('https://jsonplaceholder.typicode.com/posts')
      //   .toPromise()
      //   .then(response => {
      //     this.dataItems = response.json();
      //     console.log(this.dataItems)
      //   })
      //   .catch(error => console.log(error))


      this.sampleService.getDataList().subscribe(data=>{
       console.log(data);
        this.dataItems=data;
      })


      // this.sampleService.getDataList().pipe(map(x=> x.map(y=>{
      //   y.title=   y.title + '  2345345';
      //   return y;
      // }))).subscribe(data=>{
      //  console.log(data);
      //   this.dataItems=data;
      // })

    }

    public getClasses(){
      return {
        'highlight': true,
        'strike': false
      }
    }

        
    public getStyles(){
      return {
        'font-style': 'italic',
        'font-weight': 'bold'
      }
    }


    i=0;
    keyup(event:any){
      this.sampleService.setValue(event.target.value);
    }

}
