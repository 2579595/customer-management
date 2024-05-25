
import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { apiUrls } from '../../app/api.urls';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    http = inject (HttpClient);
     
    registerService(registerObj : any){
        return this.http.post<any>(`${apiUrls.authServiceApi}register`, registerObj);
    }


    loginService(loginObj : any){
      return this.http.post<any>(`${apiUrls.authServiceApi}login`, loginObj);
  
    }  

}
