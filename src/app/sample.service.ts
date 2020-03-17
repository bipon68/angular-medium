import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemList } from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {


  private numberSubject$ = new BehaviorSubject<string>('');
  private numberObj$= this.numberSubject$.asObservable();

  constructor(private http: HttpClient) { }

  setValue(num:string){
    this.numberSubject$.next(num);
  }

  getData(){
   return this.numberObj$;
  }

  getDataList():Observable<ItemList[]>{
    return this.http.get<ItemList[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
