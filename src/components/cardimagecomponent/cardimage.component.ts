import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cardimageComponent',
  templateUrl: './cardimage.component.html',
  styleUrls: ['./cardimage.component.css']
})
export class CardimageComponent {
  @Output() likeIconClicked = new EventEmitter();
  @Output() shareIconClicked = new EventEmitter();

  LikeIcon(){
    console.log("icon clicked");
    this.likeIconClicked.emit('dvsvs');
  }

  ShareIcon(){
    this.shareIconClicked.emit('share clicked');
  }


  
}
