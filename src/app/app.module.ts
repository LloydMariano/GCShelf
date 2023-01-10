import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DataService } from './Services/data.service';
import { PublicComponent } from './public/public.component';
import { PublicModule } from './public/public.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddbooksComponent } from './public/addbooks/addbooks.component';
import { MaterialModules } from './modules/material.module';
import { BookRequestComponent } from './public/book-request/book-request.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    AdminComponent,
    AddbooksComponent,
    BookRequestComponent
    
  ],
  exports: [
    
],
  imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      BrowserAnimationsModule,
      RouterModule, 
      PublicModule,
      FormsModule, 
      ReactiveFormsModule,
      HttpClientModule,
      CommonModule,
      MaterialModules
    ],
    providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
      DataService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
