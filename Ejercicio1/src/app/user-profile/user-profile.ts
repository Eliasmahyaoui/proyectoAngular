import { Component } from '@angular/core';
import { NgClass, NgStyle } from "@angular/common";


@Component({
  selector: 'user-profile',
  imports: [NgClass, NgStyle],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  profileImage = 'avatar.png';
  isPremium = true;
toggleisPremium() {
this.isPremium = !this.isPremium;
}

}
