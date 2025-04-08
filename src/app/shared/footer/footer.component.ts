import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  contactInfo = {
    phone: '0937-358-433',
    email: 'taipapa.ai@gmail.com'
  };
  
  navItems = [
    { path: '/', label: '首頁', icon: 'home' },
    { path: '/news', label: '最新消息', icon: 'feed' },
    { path: '/courses', label: '課程服務', icon: 'school' },
    { path: '/ai-resources', label: 'AI資源', icon: 'hub' },
    { path: '/about', label: '關於我們', icon: 'groups' }
  ];
}
