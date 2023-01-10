import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CreateBooks } from 'src/app/Services/data.schema';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-add-books',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.scss'],
})
export class AddbooksComponent implements OnInit {

  // AddForm:any=FormGroup;
  addBook: any;
  picture!: string;
  cover:any = [];

  constructor(
    private formControl: FormBuilder,
    private route: Router,
    private _url: DataService, 
  ) { }


  ngOnInit(): void {

  }


  form: FormGroup = this.formControl.group({
    booktitle_fld: ['', Validators.required],
    booked_fld: ['', Validators.required],
    author_fld: ['', Validators.required],
    datepub_fld: ['', Validators.required],
    publisher_fld: ['', Validators.required],
    code_fld: ['', Validators.required],
    categ_fld: ['', Validators.required],
    bookdet_fld: ['', Validators.required],
    coverpic_fld: ['', Validators.required],
  });

  onSubmit(e:any):void{
    e.preventDefault();
    let frm = this.form.controls;
    let acc: CreateBooks ={
      booktitle_fld: frm['booktitle_fld'].value,
      booked_fld: frm['booked_fld'].value,
      author_fld: frm['author_fld'].value,
      publisher_fld: frm['publisher_fld'].value,
      code_fld: frm['code_fld'].value,
      datepub_fld: frm['datepub_fld'].value,
      categ_fld: frm['categ_fld'].value,
      bookdet_fld: frm['bookdet_fld'].value,
      coverpic_fld: frm['coverpic_fld'].value,
    }
console.log(acc)
    this._url.request('StoreBooks','', acc ,'post').subscribe((res:any)=>{
      
      this.addBook = res.acc;

      

      // localStorage.setItem('Books:', JSON.stringify(this.AddForm));
      // let getData = localStorage.getItem('Books:') as unknown as string;
      
      // console.log(JSON.parse(getData));

      // this.AddForm.booktitle_fld = res.acc.booktitle_fld;
      // this.AddForm.author_fld = res.add.author_fld;
      // this.AddForm.datepub_fld = res.add.datepub_fld;
      // this.AddForm.categ_fld = res.add.categ_fld;
      // this.AddForm.bookdet_fld = res.add.bookdet_fld;
      // this.AddForm.coverpic_fld = res.add.coverpic_fld;

      console.log(this.addBook);
}),(error: any)=> {
      console.log("Error", error);
    }   
  }

  pic(event:any){
    const reader = new FileReader();
if(event.target.files && event.target.files.length) {
  const [coverpic_fld] = event.target.files;
  reader.readAsDataURL(coverpic_fld);
  // console.log( picture);
  reader.onload = () => {
   this.picture = reader.result as string;
   //this.fileChange = true;
   this.form.patchValue({coverpic_fld: reader.result})
   console.log(this.form.get('coverpic_fld'));

  };
}
//store file to global variable
this.cover = event.target.cover;
  // console.log(this.
  }

  
}