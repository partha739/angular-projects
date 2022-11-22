import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Productpage } from '../productpage';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent implements OnInit {


  constructor(private service:ApiserviceService,private router:ActivatedRoute, private fb:FormBuilder){}
  ngOnInit(): void {
  
   
     }

     
    //  productForm=new FormGroup({
    //   title:new FormControl('',Validators.required),
    //   description:new FormControl('',Validators.required),
    //   img:new FormGroup({
    //   image:new FormControl('',Validators.required),
    // }),
    //   prices : new FormGroup({
    //    price:new FormControl('',Validators.required),
    //    pricing:new FormControl('',Validators.required),
    //   }),
    //   selectoptions:new FormGroup({
    //    options:new FormControl(''),
    //    optionsvalue:new FormControl('')
    //   })
   
    
    //  })


    
     productForm=this.fb.group({
      title:['',Validators.minLength(3)],
      description:['',[Validators.maxLength(250)]],
     
        image:[''],
     
     
        price:[''],
        pricing:[''],
  
        options:[''],
        optionsvalue:['']
     
     })
     successmsg=""
     errorMsg=""
     productSubmit(){
      if(this.productForm.valid){
       console.log(this.productForm.value)
       this.service.createData(this.productForm.value).subscribe((res)=>{
         console.log(res)
         this.productForm.reset();
         this.successmsg=res.message
       })
       }
      
     }
 
 
 newproductModel=new Productpage("size");
  options=["Size","Color","Material","Style"]
 
optionHasError=true;
submitted=false
userModel=new Productpage('partha')
  title: any;


validateTopic(value: string){
  if(value=="default")
  {
    this.optionHasError=true;
  }
  else{
    this.optionHasError=false
  }
}

 
values=['small','medium','large','X-Large']

showopt=false
checked(){
  this.showopt=true
}


  }
  


