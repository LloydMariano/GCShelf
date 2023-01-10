import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  userData:any;

  email:any;
  fname_fld:any;
  mname_fld:any;
  lname_fld:any;
  studnum_fld:any;
  dept_fld:any;
  program_fld:any;


  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private route: Router,
    private _url: DataService,
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
    let getData = localStorage.getItem('student:') as unknown as string;
    let studentData:any = JSON.parse(getData);
      
      console.log(JSON.parse(getData));

      this.email = studentData.email;
      this.fname_fld = studentData.fname_fld;
      this.mname_fld = studentData.mname_fld;
      this.lname_fld = studentData.lname_fld;
      this.studnum_fld = studentData.studnum_fld;
      this.dept_fld = studentData.dept_fld;
      this.program_fld = studentData.program_fld;
  }

  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
     
  }

    logout(){
      this._url.request('logout','' ,'' ,'post').subscribe((res:any)=>{
        // console.log(res)
        localStorage.removeItem('token');
        localStorage.removeItem('student:');
        this.route.navigate(['login']);
        
      }),(error: any)=> {
        console.log("Error", error);
      }
    
    }
}

