import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Post} from "./models/post.model";
import * as PostActions from "./actions/post.actions";


interface AppState {
  message:string;
}

interface IAppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message$:Observable<string>
  post: Observable<Post>
  text: string;

  constructor(private store:Store<AppState>,private store1: Store<IAppState>) {
    this.message$=this.store.select('message');
    this.post = this.store1.select('post')
  }

  redMessage(){
    this.store.dispatch({type:'red'})
  }

  greenMessage(){
    this.store.dispatch({type:'green'})
  }


  editText() {
    this.store.dispatch(new PostActions.EditText(this.text) )
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset())
    this.text='';
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote())
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote())
  }

}
