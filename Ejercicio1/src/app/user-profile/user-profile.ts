import { Component } from '@angular/core';
import { NgClass } from "@angular/common";


@Component({
  selector: 'user-profile',
  imports: [NgClass],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  profileImage = 'avatar.png';
  isPremium = false;
  toggleisPremium() {
    this.isPremium = !this.isPremium;
  }

}
