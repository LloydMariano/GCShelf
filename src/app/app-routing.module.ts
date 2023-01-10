import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApprovedComponent } from './admin/approved/approved.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PendingComponent } from './admin/pending/pending.component';
import { LoginComponent } from './login/login.component';
import { AddbooksComponent } from './public/addbooks/addbooks.component';
import { BookDescriptionComponent } from './public/book-description/book-description.component';
import { BookComponent } from './public/book/book.component';
import { CategoryComponent } from './public/category/category.component';
import { FavoriteComponent } from './public/favorite/favorite.component';
import { HomeComponent } from './public/home/home.component';
import { PhysicalBookComponent } from './public/physical-book/physical-book.component';
import { PublicComponent } from './public/public.component';
import { RequestHistoryComponent } from './public/request-history/request-history.component';


const routes: Routes = [
  {path: 'public', 
  component: PublicComponent,
  children:[
    {path: 'home', component: HomeComponent,},
    {path: 'favorite', component: FavoriteComponent,},
    {path: 'category', component: CategoryComponent,},
    {path: 'request-history', component: RequestHistoryComponent,},
    {path: 'book-description/:id', component: BookDescriptionComponent}
  ]},

  {path: 'admin', 
  component: AdminComponent,
  children:[
    {path: 'dashboard', component: DashboardComponent,},
    {path: 'pending', component: PendingComponent,},
    {path: 'books', component: BookComponent,},
    {path: 'approved', component: ApprovedComponent,},
    {path: 'addbooks', component: AddbooksComponent,},
    {path: 'physical-books', component: PhysicalBookComponent,}
  ]},

  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
