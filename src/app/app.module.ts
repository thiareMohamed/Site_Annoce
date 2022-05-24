import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutAnnnonceComponent } from './ajout-annnonce/ajout-annnonce.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailComponent } from './detail/detail.component';
import {HttpClientModule} from "@angular/common/http";


const routes : Routes = [
  {path : "", component : AccueilComponent},
  {path : "accueil", component : AccueilComponent},
  {path : "add", component : AjoutAnnnonceComponent},
  {path : "detail/:id", component : DetailComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AccueilComponent,
    AjoutAnnnonceComponent,
    ListeAnnonceComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
