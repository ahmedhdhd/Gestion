import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { LoadingInterceptor } from './core/interceptor/loading.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { FormsModule } from '@angular/forms';
import { UtilisateursComponent } from './parametrage/utilisateurs/utilisateurs.component';
import { ClientsComponent } from './parametrage/clients/clients.component';
import { AddEditUtilisateursComponent } from './parametrage/add-edit-utilisateurs/add-edit-utilisateurs.component';
import { AddEditClientsComponent } from './parametrage/add-edit-clients/add-edit-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailedComponent,
    UtilisateursComponent,
    ClientsComponent,
    AddEditUtilisateursComponent,
    AddEditClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,FormsModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
