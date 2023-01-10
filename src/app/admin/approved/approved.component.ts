import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss']
})
export class ApprovedComponent implements OnInit {

  constructor(private _url: DataService) { }

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
