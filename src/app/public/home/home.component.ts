import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( 
    private formControl: FormBuilder,
    private route: Router,
    private _url: DataService, ) {}


  ngOnInit(): void {
    this.getBook();
  }

  books : any=[];
  filteredList :any =[];
  searchValue = '';

  getBook(){
    this._url.request('StoreBooks','', '','get').subscribe((res:any)=>{
          console.log(res);
          this.books = res;
          this.filteredList = res;
  })}

  /**
   * Filter search bar, available when schedules list is set to 'teachers'
   */
  filterFromSearch() {
    this.books = this.filteredList
    this.books = this.books.filter((o:any) =>
      Object.keys(o).some((k: any) => {
        if (k == 'id' || k ==  'remember_token' || k == 'coverpic_fld') {
          return
        }else {
          return o[k].toLowerCase().includes(this.searchValue.toLowerCase())
        }
        
      }
      ));
  }
}
