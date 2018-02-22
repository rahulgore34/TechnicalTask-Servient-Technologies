import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GetdataService } from './getdata.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule,
    InfiniteScrollModule 
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
