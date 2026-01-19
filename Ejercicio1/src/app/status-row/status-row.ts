import { Component } from '@angular/core';
import { disabled } from '@angular/forms/signals';

@Component({
  selector: 'status-row',
  imports: [],
  templateUrl: './status-row.html',
  styleUrl: './status-row.css',
})
export class StatusRow {

  active = true;
  enabled = false;

  classRow= {
    highlight: this.active,
    disabled: !this.enabled,
  }

}
