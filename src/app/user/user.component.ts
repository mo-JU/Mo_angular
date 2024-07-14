import { Component,Input, Output, EventEmitter } from '@angular/core';
import {User} from "./user.model"
import { CardComponent } from "../Shared/card/card.component";

@Component({
  selector: 'Mo-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() clickUser= new EventEmitter();
  get imagePath() {
    return "users/" + this.user.avatar;
  }


  onClickUser(){
    this.clickUser.emit(this.user.id);
  }
}
