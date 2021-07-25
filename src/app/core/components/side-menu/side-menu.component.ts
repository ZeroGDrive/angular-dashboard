import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden',
        opacity: 0,
      })),
      state('visible', style({
        height: '*',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ])
  ]
})
export class SideMenuComponent implements OnInit {
  @Input() active = true;

  constructor() { }

  ngOnInit(): void {
  }

}
