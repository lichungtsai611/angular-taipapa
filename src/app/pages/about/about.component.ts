import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SocialType = 'website' | 'linkedin' | 'facebook' | 'company';

interface SocialLink {
  type: SocialType;
  url: string;
}

type Industry =
  | '金融業'
  | '科技業'
  | '媒體業'
  | '快消業'
  | '數位遊牧';

interface Member {
  name: string;
  title: string;
  background: string;
  photo: string;
  photoLink?: string;
  industry?: Industry;
  socials: SocialLink[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  foundedYear = 2019;
  socialIconAssets: Record<SocialType, string> = {
    website: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Globe_icon.svg',
    linkedin: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    facebook: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png',
    company: 'https://cdn.jsdelivr.net/npm/@tabler/icons@2.47.0/icons/building-skyscraper.svg'
  };
  socialLabelMap: Record<SocialType, string> = {
    website: '個人網站',
    linkedin: 'LinkedIn',
    facebook: 'Facebook',
    company: '公司網站'
  };
  
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

  // 管理成員
  managementMembers: Member[] = [
    {
      name: '蔡立忠 Richard',
      title: '負責人、理事長',
      background: '外商資深數據工程師，專注AI技術開發、整合',
      photo: 'assets/teams/Richard.webp',
      photoLink: 'https://www.richard-info.com',
      socials: [
        {
          type: 'linkedin',
          url: 'https://www.linkedin.com/in/richard-tsai-4474994a/'
        }
      ]
    },
    {
      name: '黃海潮 Eric',
      title: '副理事長',
      background: '外商精品龍頭數據分析師，擅長AI工具實務應用',
      photo: 'assets/teams/Eric.webp',
      photoLink: 'https://www.seawave.tw',
      socials: [
        {
          type: 'linkedin',
          url: 'https://www.linkedin.com/in/seawave/'
        }
      ]
    },
    {
      name: '廖文碩 Kevin',
      title: '秘書長',
      background: '快找整合顧問有限公司創辦人，專精於AI技術整合與企業轉型',
      photo: 'assets/teams/Kevin.webp',
      photoLink: 'https://kevin.voyage/',
      socials: [
        {
          type: 'linkedin',
          url: 'https://www.linkedin.com/in/sc-kevin/'
        }
      ]
    }
  ];

  // 業界顧問
  industryFilters: Array<{ label: string; value: Industry | 'all' }> = [
    { label: '全部', value: 'all' },
    { label: '金融業', value: '金融業' },
    { label: '科技業', value: '科技業' },
    { label: '媒體業', value: '媒體業' },
    { label: '快消業', value: '快消業' },
    { label: '數位遊牧', value: '數位遊牧' }
  ];

  selectedIndustryFilter: Industry | 'all' = 'all';

  industryAdvisors: Member[] = [
    {
      name: '張耿瑭 Charles',
      title: '數位轉型顧問',
      background: '言回有限公司創辦人',
      photo: 'assets/teams/張耿瑭.webp',
      photoLink: 'https://ckc.tw',
      industry: '數位遊牧',
      socials: [
        {
          type: 'company',
          url: 'https://yenhui.co/service/'
        }
      ]
    },
    {
      name: '洪振倫 Kevin',
      title: 'AI 數據應用業師',
      background: '現職數據工程師，專注於 AI 應用開發、流程整合',
      photo: 'assets/teams/洪振倫.webp',
      industry: '媒體業',
      socials: [
        {
          type: 'linkedin',
          url: 'https://www.linkedin.com/in/zhen-lun-hong'
        }
      ]
    },
    {
      name: '高孟暉 Max',
      title: 'AI應用程式顧問',
      background: '外商軟體工程師，專注於大規模應用開發與AI應用實踐',
      photo: 'assets/teams/高孟暉.webp',
      industry: '科技業',
      socials: [
        {
          type: 'linkedin',
          url: 'https://www.linkedin.com/in/menghueigao/'
        }
      ]
    },

    {
      name: '韓諆璋 Jonathan',
      title: 'AI行銷講師',
      background: '密米爾行銷公司創辦人、知名平台線上課程講師',
      photo: 'assets/teams/韓諆璋.webp',
      photoLink: 'https://hahow.in/courses/5e586dc6c8bfb6002494c0d6',
      industry: '數位遊牧',
      socials: []
    },
    {
      name: '蔡宜軒 Sandy',
      title: 'AI 數據應用業師',
      background: '金融業數據分析師，專注於AI輔助應用分析',
      photo: 'assets/teams/蔡宜軒.webp',
      industry: '金融業',
      socials: [
        {
          type: 'linkedin',
          url: 'https://www.linkedin.com/in/yi-hsuan-tsai/'
        }
      ]
    },
    {
      name: '吳仁凱 Kevin',
      title: 'Python業師',
      background: '台灣半導體龍頭企業工程師，擅長開發AI自動化工具與應用',
      photo: 'assets/teams/KevinWu.webp',
      industry: '科技業',
      socials: [
        {
          type: 'linkedin',
          url: 'https://www.linkedin.com/in/%E4%BB%81%E5%87%B1-%E5%90%B3-bb234b13b/'
        }
      ]
    },
    {
      name: '郭晏廷 Andy',
      title: '快消業AI應用業師',
      background: '外商 FMCG 產品供應經理，擅長AI技術應用於職場環境',
      photo: 'assets/teams/郭晏廷.webp',
      industry: '快消業',
      socials: [
        {
          type: 'linkedin',
          url: 'https://www.linkedin.com/in/andy-kuo-95a5b2195/'
        }
      ]
    },
    {
      name: '陳建哲 Calvin',
      title: 'AI應用講師',
      background: '職業講師，專精於AI技術應用與實務操作',
      photo: 'assets/teams/Calvin.webp',
      industry: '數位遊牧',
      socials: [
        {
          type: 'facebook',
          url: 'https://www.facebook.com/chen.jian.zhe.100892'
        }
      ]
    }
  ];

  get filteredIndustryAdvisors(): Member[] {
    if (this.selectedIndustryFilter === 'all') {
      return this.industryAdvisors;
    }
    return this.industryAdvisors.filter(
      (advisor) => advisor.industry === this.selectedIndustryFilter
    );
  }

  setIndustryFilter(filter: Industry | 'all'): void {
    this.selectedIndustryFilter = filter;
  }

  // 學界顧問
  academicAdvisors: Member[] = [
    {
      name: '侯昱安 Andy',
      title: 'AI研究顧問',
      background: '美國杜克大學工程博士生，推動AI技術於產業實務的應用與落地。',
      photo: 'assets/teams/侯昱安.webp',
      socials: [
        {
          type: 'linkedin',
          url: 'https://www.linkedin.com/in/anhou0703'
        }
      ]
    }
  ];
}
