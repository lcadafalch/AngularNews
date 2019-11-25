import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css']
})
export class TopnewsComponent {


  apiTopNews: string = ""

  constructor(public _data: ServiceService, ) {


    this._data.getTopNews()
      .subscribe((data: any) => {

        this.apiTopNews = data
      })
  }

  buscarNoticia(noticia) {

    console.log(noticia)
    console.log(this.apiTopNews)

  }



}
