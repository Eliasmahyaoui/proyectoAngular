import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'text-style',
  imports: [NgStyle],
  templateUrl: './text-style.html',
  styleUrl: './text-style.css',
})
export class TextStyle {

  fontsize= 20;
  isError= false;
  selected= tr;

  classStyle ={
    border: this.selected ? '2px solid blue' : '2px solid gray'

  };

}
