import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent {

  datosApi = ""

  constructor(public _data: ServiceService) {
    this._data.getNoticias()
      .subscribe((data: any) => {

        this.datosApi = data
        console.log(this.datosApi)

      })





  }




}
