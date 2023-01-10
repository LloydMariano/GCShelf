import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrls: ['./request-history.component.scss']
})
export class RequestHistoryComponent implements OnInit {

  constructor( 
    private _url: DataService, ) {}


  ngOnInit(): void {
    this.getBook();
  }

  books : any=[];

  getBook(){
    this._url.request('StoreBooks','', '','get').subscribe((res:any)=>{
          console.log(res);
          this.books = res;
  })}
}
