
import { FormsModule } from '@angular/forms';
import { Component, ViewEncapsulation } from '@angular/core';
// import {LikeComponent} from '../components/likecomponent/like.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  //card image component
  status="likeiconActive"
  iconname="question_answer"
  //card image component end


//card image component
  clickimageicon(e){
    console.log("like icon clicked");
    console.log(e);
  }
  
  //card image component
  clickShareicon(e){
    console.log("share icon clicked..");
    console.log(e);

  }


}
