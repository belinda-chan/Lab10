import { Injectable } from '@angular/core';
import { HttpClient} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  
  constructor(private http:HttpClient) { }

  showAlert(msg:string){
    alert(msg);
  }
}
