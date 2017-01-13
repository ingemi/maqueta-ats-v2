import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { Maqueta1Component }  from './pages/maqueta1/maqueta1.component';
import { Maqueta2Component }  from './pages/maqueta2/maqueta2.component';


const appRoutes: Routes = [
  { path: 'maqueta1', component: Maqueta1Component },
  { path: 'maqueta2',      component: Maqueta2Component }
];



@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    AppComponent,
    Maqueta1Component,
    Maqueta2Component
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
