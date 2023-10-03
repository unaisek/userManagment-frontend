import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { postReducer,profileReducer } from './components/state/app.reducer';
import { appEffects } from './components/state/app.effects';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminCreateuserComponent } from './components/admin-createuser/admin-createuser.component';
import { AdminUserlistComponent } from './components/admin-userlist/admin-userlist.component';
import { AdminUsereditComponent } from './components/admin-useredit/admin-useredit.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './components/admin-login/admin.routing';
import { AppService } from './components/state/app.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AdminNavComponent,
    AdminLoginComponent,
    AdminCreateuserComponent,
    AdminUserlistComponent,
    AdminUsereditComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule,
    StoreModule.forRoot({userdetails:profileReducer,allusers:postReducer}),
    EffectsModule.forRoot([appEffects])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
