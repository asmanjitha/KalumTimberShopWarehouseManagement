import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService} from './service/auth.service';
import { RecipedataService } from './service/recipedata.service';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { RecipecardComponent } from './components/recipecard/recipecard.component';
import { AddrecipeComponent } from './components/addrecipe/addrecipe.component';
import { RedipedetailsComponent } from './components/redipedetails/redipedetails.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbaruserComponent } from './components/navbaruser/navbaruser.component';

import { SweetAlertService } from 'angular-sweetalert-service';
import { EditrecipecardComponent } from './components/editrecipecard/editrecipecard.component';
import { EditrecipeComponent } from './components/editrecipe/editrecipe.component';
import { CheckrecipecardComponent } from './components/checkrecipecard/checkrecipecard.component';
import { CheckrecipeComponent } from './components/checkrecipe/checkrecipe.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import {APP_BASE_HREF} from '@angular/common';
import { NeutronRatingModule } from 'neutron-star-rating';


const applicationRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: LandingpageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchpageComponent},
  {path: 'recipe/:_id', component: RedipedetailsComponent},
  {path: 'editrecipe/:_id', component: EditrecipeComponent},
  {path: 'checkrecipe/:_id', component: CheckrecipeComponent},
  {path: 'add', component: AddrecipeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  //{path: '/', component: LandingpageComponent},
  { path: '', component:LandingpageComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SearchpageComponent,
    RecipecardComponent,
    AddrecipeComponent,
    RedipedetailsComponent,
    AdminComponent,
    NavbaruserComponent,
    EditrecipecardComponent,
    EditrecipeComponent,
    CheckrecipecardComponent,
    CheckrecipeComponent,
    AdminloginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes),
    NeutronRatingModule
  ],
  providers: [
    AuthService,
    RecipedataService,
    SweetAlertService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
