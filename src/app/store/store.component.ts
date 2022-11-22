import { style } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

 value1="Edit"
 val="close"
 editstore1: boolean =false
  constructor() { }

  ngOnInit(): void {
  }
  onClick1(){
    this.editstore1=!this.editstore1
    this.value1=this.val
  }

  value2="Edit"
  editstore2:boolean=false
  onClick2(){
    this.editstore2=!this.editstore2
    this.value2="Close"
  
  }
  value3="Edit"
  editstore3:boolean=false
  onClick3(){
    this.editstore3=!this.editstore3
    this.value3="Close"
  
  }
  
  

}
