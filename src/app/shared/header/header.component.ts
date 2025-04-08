import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = [
    { path: '/', label: '首頁', icon: 'home' },
    { path: '/news', label: '最新消息', icon: 'feed' },
    { path: '/courses', label: '課程服務', icon: 'school' },
    { path: '/ai-resources', label: 'AI資源', icon: 'hub' },
    { path: '/about', label: '關於我們', icon: 'groups' }
  ];
  
  showMenu = false;
  
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
