import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BasicformComponent } from './form/basicform/basicform.component';
import { TableviewComponent } from './form/tableview/tableview.component';

import { SubmitserviceService } from './service/submitservice.service';
import { LocalstorageService } from './service/localstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicformComponent,
    TableviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forRoot([
      {
         path: '',
         component: TableviewComponent
      }
   ]) ],
  providers: [SubmitserviceService,LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
