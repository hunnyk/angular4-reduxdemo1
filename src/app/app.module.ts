import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {simpleReducer } from './simple.reducer';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {PostReducer} from "./reducers/post.reducer";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({post:PostReducer,message:simpleReducer}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
