import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(public _data: HttpClient) { }


  getNoticias() {

  return this._data.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7606c2c739ca4d90a5bae191abc9378b')

  }

  getTopNews(){
  

    return this._data.get("https://newsapi.org/v2/top-headlines?country=mx&apiKey=7606c2c739ca4d90a5bae191abc9378b")
  }


}

