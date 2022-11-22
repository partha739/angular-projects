import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

readData:any
  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
   
    this.service.getAllData().subscribe((res)=>{
      console.log(res);
      this.readData=res.data

    })
  }



}
