import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { CreateBooks } from 'src/app/Services/data.schema';
import { DataService } from 'src/app/Services/data.service';
import { AddbooksComponent } from 'src/app/public/addbooks/addbooks.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-physical-book',
  templateUrl: './physical-book.component.html',
  styleUrls: ['./physical-book.component.scss']
})
export class PhysicalBookComponent implements OnInit {

  displayedColumns: string[] = ['booktitle_fld', 'name', 'progress', 'fruit'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  

  constructor(public dialog: MatDialog, 
    private formControl: FormBuilder,
    private route: Router,
    private _url: DataService, ) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddbooksComponent, {
      maxWidth: '70vw',
      maxHeight: '70vh',
      height: '70%',
      width: '70%',
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
    this._url.request('StoreBooks','', '','get').subscribe((res:any)=>{
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.books = res;
  })}

  // submit(e:any):void{
  //   e.preventDefault();
  //   let frm = this.frmGroup.controls;
  //   let acc: CreateBooks ={
  //     booktitle_fld: frm['booktitle_fld'].value,
  //     author_fld: frm['author_fld'].value,
  //     publisher_fld: frm['publisher_fld'].value,
  //     code_fld: frm['code_fld'].value,
  //     datepub_fld: frm['datepub_fld'].value,
  //     categ_fld: frm['categ_fld'].value,
  //     bookdet_fld: frm['bookdet_fld'].value,
  //     coverpic_fld: frm['coverpic_fld'].value,
  //   }

//     this._url.request('StoreBooks','', acc ,'post').subscribe((res:any)=>{
//       console.log(res)
//       this.addBook = res.acc;

//       localStorage.setItem('Books:', JSON.stringify(this.AddForm));
//       let getData = localStorage.getItem('Books:') as unknown as string;
      
//       console.log(JSON.parse(getData));

//       this.AddForm.booktitle_fld = res.acc.booktitle_fld;
//       this.AddForm.author_fld = res.add.author_fld;
//       this.AddForm.datepub_fld = res.add.datepub_fld;
//       this.AddForm.categ_fld = res.add.categ_fld;
//       this.AddForm.bookdet_fld = res.add.bookdet_fld;
//       this.AddForm.coverpic_fld = res.add.coverpic_fld;

//       console.log(this.addBook);
// }),(error: any)=> {
//       console.log("Error", error);
//     } 
  
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}