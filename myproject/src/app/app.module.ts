import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyserviceService} from './myservice.service';
import { AppComponent } from './app.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { MyFilterPipe } from './my-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoappComponent,
    MyFilterPipe,
 

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
