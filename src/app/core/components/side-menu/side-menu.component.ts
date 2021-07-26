import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  mainItems: MenuItem[] = [
    {label: 'الرئيسية', icon: 'pi pi-fw pi-home', routerLink: ['/'], routerLinkActiveOptions: {exact: true}},
    {label: 'المنتجات', icon: 'pi pi-fw pi-table'},
    {label: 'الطلبات', icon: 'pi pi-fw pi-list'},
    {label: 'العملاء', icon: 'pi pi-fw pi-users'},
    {label: 'التقارير', icon: 'pi pi-fw pi-book'},
  ];
  settingsItems: MenuItem[] = [
    {label: 'إعدادات المتجر', icon: 'pi pi-fw pi-cog'},
    {label: 'المحفظة و الفواتير', icon: 'pi pi-fw pi-wallet'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
