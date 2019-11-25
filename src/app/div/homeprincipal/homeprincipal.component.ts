import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router, Routes } from '@angular/router'


@Component({
  selector: 'app-homeprincipal',
  templateUrl: './homeprincipal.component.html',
  styleUrls: ['./homeprincipal.component.css']
})
export class HomeprincipalComponent {

  datosApi: string = ""


  constructor(public _data: ServiceService, private Router: Router) {
    

    this._data.getNoticias()
      .subscribe((data: any) => {

        this.datosApi = data



      })

  }
  verNoticia(i:number) {
    console.log(i)
  }
}
