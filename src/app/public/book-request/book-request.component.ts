import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import {  StudentRequest } from 'src/app/Services/data.schema';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-book-request',
  templateUrl: './book-request.component.html',
  styleUrls: ['./book-request.component.scss']
})
export class BookRequestComponent implements OnInit {

  addreq: any;

  constructor(  private formControl: FormBuilder,
    private route: Router,
    private activatedRoute:ActivatedRoute,
    private _url: DataService,
    @Inject(MAT_DIALOG_DATA) public id: any,
    ) { }

    ngOnInit(): void {
      this.getBook();
      
    }
  
    books : any=[];
  
    getBook(){
      let Book = this.id
      console.log(Book)
      this._url.request('StoreBooks/find/'+Book,'', '','get').subscribe((res:any)=>{
            console.log(res);
            this.books = res;
            console.log(this.books)
            let getData = JSON.parse(localStorage.getItem('student:') as unknown as any);
            console.log(getData)
            this.formReq.patchValue({
              booktitle_fld: this.books.booktitle_fld,
              booked_fld: this.books.booked_fld,
              studname_fld:getData.fname_fld+" "+getData.lname_fld,
              studnum_fld:getData.studnum_fld,
              dept_fld: getData.dept_fld,   
              datereq_fld: moment().format('YYYY-MM-DD')   
        })
        console.log(this.formReq.value)
    })}
  
  formReq: FormGroup = this.formControl.group({
    booktitle_fld: ['', Validators.required],
    booked_fld: ['', Validators.required],
    studname_fld: ['', Validators.required],
    studnum_fld: ['', Validators.required],
    datereturn_fld: ['', Validators.required],
    datereq_fld: ['', Validators.required],
    dept_fld: ['', Validators.required],
    reqcode_fld: ['', Validators.required],
  });

  onSubmit(e:any):void{
    console.log(this.formReq.value)
    e.preventDefault();
    let frm = this.formReq.controls;
    let acc: StudentRequest ={
      booktitle_fld: frm['booktitle_fld'].value,
      booked_fld: frm['booked_fld'].value,
      studname_fld: frm['studname_fld'].value,
      studnum_fld: frm['studnum_fld'].value,
      dept_fld: frm['dept_fld'].value,
      reqcode_fld: frm['reqcode_fld'].value,
      datereq_fld: frm['datereq_fld'].value,
      datereturn_fld: frm['datereturn_fld'].value,
    }
console.log(acc)
    this._url.request('StudentRequest','', acc ,'post').subscribe((res:any)=>{
      
      this.addreq = res.acc;


      console.log(this.addreq);
}),(error: any)=> {
      console.log("Error", error);
    }   
  }

 

}
