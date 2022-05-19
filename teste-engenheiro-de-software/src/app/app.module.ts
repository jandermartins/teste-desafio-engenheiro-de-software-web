import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChamadoListComponent } from './main/teste-list.component';
import { DocumentoComponent } from './main/documento.component';


@NgModule({
  declarations: [
    AppComponent,
    ChamadoListComponent,
    DocumentoComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'im-day', pathMatch: 'full'
      },
      {
        path: 'im-day', component: ChamadoListComponent
      },
      {
        path: 'docs', component: DocumentoComponent
      }  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
