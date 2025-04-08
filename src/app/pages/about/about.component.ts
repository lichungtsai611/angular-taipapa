import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  missionStatement = '致力於推動人工智慧技術在台灣的實務應用與知識普及，連結產學研各界資源，培育AI人才，共創智慧未來。';
  
  visionPoints = [
    '建立台灣AI實務應用的知識交流平台',
    '促進AI技術在各行業的落地與應用',
    '培育具AI思維與技能的跨領域人才',
    '連結國際AI社群，提升台灣AI產業競爭力'
  ];
  
  contactInfo = {
    phone: '0937-358-433',
    email: 'taipapa.ai@gmail.com'
  };
}
