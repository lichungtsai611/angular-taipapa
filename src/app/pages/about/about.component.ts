import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  foundedYear = 2019;
  
  purpose = '本會旨在推廣人工智慧技術於台灣社會的實務應用，協助全民理解並運用AI工具，以提升生活品質與職場競爭力，促進數位轉型與全民科技素養。';
  
  tasks = [
    '辦理人工智慧教育課程、講座、研討會與工作坊，促進全民AI素養。',
    '出版與提供人工智慧應用之教材、研究與數位學習資源。',
    '推廣AI技術於教育、生活、職場與產業上的實務應用。',
    '協助個人與組織導入AI工具，提升工作效率與創新能力。',
    '提升社會對AI倫理、法律、資料保護與風險意識之認知。',
    '促進國內外在人工智慧應用領域的經驗交流與跨界合作。',
    '建立AI應用資源平台，分享AI工具、案例與學習管道。',
    '支援政府、企業與學校推動AI普及教育與轉型計畫。'
  ];
  
  visionPoints = [
    '建立台灣AI實務應用的知識交流平台',
    '促進AI技術在各行業的落地與應用',
    '培育具AI思維與技能的跨領域人才',
    '連結國際AI社群，提升台灣AI產業競爭力'
  ];
  
  coreValues = [
    {
      title: '實用價值',
      description: '聚焦AI技術的實際應用與落地，創造真實價值',
      icon: 'diamond'
    },
    {
      title: '開放共享',
      description: '促進知識交流與資源共享，推動AI民主化',
      icon: 'share'
    },
    {
      title: '跨域融合',
      description: '鼓勵跨領域合作，整合多元專業與視角',
      icon: 'diversity_3'
    },
    {
      title: '持續創新',
      description: '保持對新技術與方法的探索精神，不斷突破創新',
      icon: 'lightbulb'
    }
  ];
  
  teamMembers = [
    {
      name: '蔡立忠',
      title: '理事長',
      background: '外商資深數據工程師，專注AI技術開發、整合',
      photo: 'assets/teams/Richard.webp',
      website: 'https://www.richard-info.com',
      linkedin: 'https://www.linkedin.com/in/richard-tsai-4474994a/'
    },
    {
      name: '黃海潮',
      title: '副理事長',
      background: '外商精品龍頭數據分析師，擅長AI工具實務應用',
      photo: 'assets/teams/Eric.webp',
      website: 'https://www.seawave.tw',
      linkedin: 'https://www.linkedin.com/in/seawave/'
    },
    {
      name: '廖文碩',
      title: '秘書長',
      background: '知名整合顧問有限公司創辦人，專精於AI技術整合與企業轉型',
      photo: 'assets/teams/Kevin.webp',
      website: 'https://kevin.voyage/',
      linkedin: 'https://www.linkedin.com/in/sc-kevin/'
    }
  ];
}
