import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-homeprincipal',
  templateUrl: './homeprincipal.component.html',
  styleUrls: ['./homeprincipal.component.css']
})
export class HomeprincipalComponent {

  datosApi: string = ""

  constructor(public _data: ServiceService) {

    this._data.getNoticias()
      .subscribe((data: any) => {

        this.datosApi = data 
        console.log(this.datosApi)

      })




  }


}
