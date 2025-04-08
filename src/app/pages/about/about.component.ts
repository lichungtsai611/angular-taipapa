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
  
  missionStatement = '致力於推動人工智慧技術在台灣的實務應用與知識普及，連結產學研各界資源，培育AI人才，共創智慧未來。';
  
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
  
  milestones = [
    {
      year: 2019,
      title: '協會成立',
      description: '由一群熱衷於AI技術的產業專家共同發起成立'
    },
    {
      year: 2020,
      title: '首屆AI研討會',
      description: '舉辦首屆台灣AI實務應用研討會，匯集各界專家'
    },
    {
      year: 2021,
      title: '人才培育計畫啟動',
      description: '推出AI人才培育計畫，提供實務導向課程'
    },
    {
      year: 2022,
      title: '產學合作擴展',
      description: '與多所大學及產業建立合作夥伴關係'
    },
    {
      year: 2023,
      title: '國際交流深化',
      description: '開展與國際AI組織的交流與合作項目'
    }
  ];
  
  teamMembers = [
    {
      name: '王大明',
      title: '理事長',
      background: '擁有20年IT產業經驗，曾任多家科技公司高階主管',
      photo: 'assets/images/team/member1.jpg'
    },
    {
      name: '李美玲',
      title: '副理事長',
      background: 'AI研究學者，專注於機器學習與自然語言處理領域',
      photo: 'assets/images/team/member2.jpg'
    },
    {
      name: '張志豪',
      title: '秘書長',
      background: '資深創業者，曾成功創立兩家AI相關新創公司',
      photo: 'assets/images/team/member3.jpg'
    }
  ];
  
  contactInfo = {
    phone: '0937-358-433',
    email: 'taipapa.ai@gmail.com',
    address: '台北市信義區松高路9號',
    social: {
      facebook: 'https://facebook.com/ai4taiwan',
      linkedin: 'https://linkedin.com/company/ai4taiwan',
      youtube: 'https://youtube.com/ai4taiwan'
    }
  };
}
