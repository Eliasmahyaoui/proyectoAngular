import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { disabled } from '@angular/forms/signals';

@Component({
  selector: 'status-row',
  imports: [CommonModule],
  templateUrl: './status-row.html',
  styleUrl: './status-row.css',
})
export class StatusRow {

  active = true;
  enabled = false;

  isFirst = false;
  isLast= true;
  

  classRow= {
    highlight: this.active,
    disabled: !this.enabled,
  }

  rowClasses= {
   first: !this.isFirst,
   last : this.isLast,
   bold: this.isLast,
      
  }

}
