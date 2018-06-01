import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'likeComponent',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likestatus') likestatus:Observable<any>;
  @Input('iconname') iconName:Observable<any>;
  @Output() iconclick = new EventEmitter();

  iconClick(){
      this.iconclick.emit(0); 
  }


  
}
