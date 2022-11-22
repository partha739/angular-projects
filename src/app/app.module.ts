import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { AddproductComponent } from './addproduct/addproduct.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { StoreComponent } from './store/store.component';
import { BrandComponent } from './brand/brand.component';
import { ThemeComponent } from './theme/theme.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { MystoreComponent } from './mystore/mystore.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './mylogin/login/login.component';



const routes: Routes = [

  {
    path:"home",component:HomeComponent},
    {
    path:"orders",component:OrdersComponent
  },{
    path:"addproduct",component:AddproductComponent
  },
  {
    path:"store",component:StoreComponent
  },
  {
    path:"brand",component:BrandComponent
  },
  {
    path:"product",component:ProductComponent
  },

  {path:"mystore",component:MystoreComponent},
  {path:"registrationform",component:RegisterComponent},
  {path:"loginform",component:LoginComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    AddproductComponent,
    StoreComponent,
    BrandComponent,
    ThemeComponent,
    ProductComponent,
    MystoreComponent,
   
    RegisterComponent,
        LoginComponent,
       
    
   
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,MatFormFieldModule,MatGridListModule,TextFieldModule,MdbFormsModule,HttpClientModule,
    MatSelectModule,MatListModule,MatIconModule,MatCardModule,MatProgressBarModule,MatCheckboxModule,MatButtonModule,
    ReactiveFormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
