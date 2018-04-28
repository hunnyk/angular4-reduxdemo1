import {Action} from '@ngrx/store';

export function simpleReducer(state:string='Hello World',action:Action){
  switch (action.type){
    case 'red':
      return state="Your favorite color is red!";
    case 'green':
      return state="Your favourite color is green!"
    default:
      return state;

  }
}
