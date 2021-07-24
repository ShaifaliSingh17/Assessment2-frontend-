import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonService } from './shared/person.service';
//import {HttpModule} from './@angular/common/HttpModule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const appRoute:Routes=[
  {path: '',component:ListComponent},
  {path: 'createUpdate',component:CreateUpdateComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
