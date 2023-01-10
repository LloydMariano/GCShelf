import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private _url: string = 'http://localhost:8000/api/';

  constructor(
    private http: HttpClient,
  ) { }


  getUsers(login:any){
    return this.http.post(this._url + '/login', login);
  }

  postBooks(onSubmit:any){
    return this.http.post(this._url + '/StoreBooks', onSubmit);
  }

  // logoutUser(logout:any){
  //   return this.http.post(this._url + '/logout', logout);
  // }

  public request(epoint: string, params:string, body:any, method: string,):any {
    switch(method){
      case 'post':
      return this.http.post(this._url + epoint + params, body, {headers: this.header()
      });
      case 'put':
      return this.http.put(this._url + epoint + params, body, {headers: this.header()
      });
      case 'get':
      return this.http.get(this._url + epoint + params,{headers: this.header()
      });
      case 'delete':
      return this.http.delete(this._url + epoint + params, {headers: this.header()
      });
    }


  }

  header(){
    let token = localStorage.getItem('token')
    let headers
    if (token) {
      headers = new HttpHeaders().set('Authorization',  'Bearer ' + token).set('Accept', 'application/json')
    }
    return headers
  }
}


