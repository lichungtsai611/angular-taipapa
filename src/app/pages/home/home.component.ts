import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  missionStatement = '致力於推動人工智慧技術在台灣的實務應用與知識普及，連結產學研各界資源，培育AI人才，共創智慧未來。';
  
  featuredCourses = [
    {
      title: 'AI入門與應用基礎',
      description: '適合零基礎學習者，了解AI基本概念與常見應用',
      image: 'assets/images/course-basic.jpg'
    },
    {
      title: 'AI工具實務工作坊',
      description: '實操各種AI工具，提升工作效率和創新力',
      image: 'assets/images/course-tools.jpg'
    },
    {
      title: '企業AI轉型策略',
      description: '為企業量身打造AI導入與應用策略',
      image: 'assets/images/course-business.jpg'
    }
  ];
  
  latestCourse = {
    title: '2024年AI趨勢與應用研討會',
    date: '2024年7月15日',
    location: '台北市信義區松高路1號',
    registerLink: '#'
  };
}
