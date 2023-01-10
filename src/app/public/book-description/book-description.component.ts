import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { BookRequestComponent } from 'src/app/public/book-request/book-request.component';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss']
})
export class BookDescriptionComponent implements OnInit {

  constructor( public dialog: MatDialog, 
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private _url: DataService, ) {}

    openDialog(id:any) {
      const dialogRef = this.dialog.open(BookRequestComponent, {
        maxWidth: '70vw',
        maxHeight: '70vh',
        height: '70%',
        width: '70%',
        data: id,
      });
  
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  ngOnInit(): void {
    this.getBook();
  }

  books : any=[];

  getBook(){
    let Book = this.activatedRoute.snapshot.params['id'];
    this._url.request('StoreBooks/find/'+Book,'', '','get').subscribe((res:any)=>{
          console.log(res);
          this.books = res;
  })}

}
