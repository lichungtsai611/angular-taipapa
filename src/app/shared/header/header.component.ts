import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = [
    { path: '/', label: '首頁' },
    { path: '/news', label: '最新消息' },
    { path: '/courses', label: '課程服務' },
    { path: '/ai-resources', label: 'AI資源' },
    { path: '/about', label: '關於我們' }
  ];
}
