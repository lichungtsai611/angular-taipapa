import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Course {
  title: string;
  description?: string;
  duration: string;
  target?: string;
  audience?: string;
  category: string;
  image?: string;
}

interface NewsItem {
  title: string;
  date: string;
  organization?: string;
  summary?: string;
  description?: string[];
  image?: string;
  link?: string;
}

interface AITool {
  name: string;
  description: string;
  image: string;
  category: string;
}

interface TeamMember {
  name: string;
  title: string;
  photo: string;
}

interface Partner {
  name: string;
  type: string; // 'academic' | 'government' | 'industry'
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  heroSection = {
    title: '台灣人工智慧實務應用推廣協會',
    subtitle: '培育 AI 人才，共創智慧未來',
    description: '致力於推動人工智慧技術在台灣的實務應用與知識普及，連結產學研各界資源，培育AI人才，共創智慧未來。'
  };
  
  // 精選課程 - 從 courses 頁面取樣
  featuredCourses: Course[] = [
    {
      title: 'ChatGPT應用技巧',
      description: '掌握ChatGPT的高效提示技巧，提升工作生產力',
      duration: '6小時',
      target: '所有想提升工作效率的專業人士',
      category: 'AI工具基礎課程',
      image: 'assets/ai-tools/chatgpt.png'
    },
    {
      title: 'AI驅動的UX/UI設計',
      description: '運用AI工具加速UI設計流程，創造優質用戶體驗',
      duration: '16小時',
      target: '網頁設計師、UI/UX設計師',
      category: 'AI網頁設計',
      image: 'assets/ai-tools/canva.png'
    },
    {
      title: 'AI行銷策略與實務',
      description: '結合AI技術優化行銷策略，提升轉換率與客戶體驗',
      duration: '12小時',
      target: '行銷人員、社群經理',
      category: 'AI數據行銷',
      image: 'assets/ai-tools/notion.png'
    }
  ];
  
  // 最新消息 - 從 news 頁面取樣
  latestNews: NewsItem[] = [
    {
      title: 'AI 時代來臨～從跨域尋找新思維',
      date: '2025-10-14',
      organization: '宜蘭縣政府',
      summary: '探討AI如何促進跨領域創新與合作，學習整合不同專業知識發展AI應用，分析AI在地方特色產業的創新機會',
      image: 'assets/ai-tools/canva.png',
      link: '/news'
    },
    {
      title: '新興人工智慧技術及產業趨勢商機',
      date: '2025-05-14',
      organization: '健行科技大學',
      summary: '探討最新AI技術發展與未來趨勢，分析AI在各產業的商業應用與投資機會，了解企業數位轉型中的AI策略規劃',
      image: 'assets/ai-tools/chatgpt.png',
      link: '/news'
    },
    {
      title: '生成式 AI 與 ChatGPT 基礎應用',
      date: '2025-05-22',
      organization: '經濟部經貿人員培訓所',
      summary: '了解生成式AI和大型語言模型的基本原理，學習ChatGPT的有效提示技巧與使用方法，掌握生成式AI在專業領域的實用案例',
      image: 'assets/ai-tools/gemini.png',
      link: '/news'
    }
  ];
  
  // 精選 AI 工具
  aiTools: AITool[] = [
    {
      name: 'ChatGPT',
      description: '強大的自然語言處理 AI，能進行對話、寫作等多種任務',
      image: 'assets/ai-tools/chatgpt.png',
      category: '文字生成'
    },
    {
      name: 'Canva',
      description: '整合 AI 功能的線上設計工具，讓設計變得更簡單直覺',
      image: 'assets/ai-tools/canva.png',
      category: '圖像設計'
    },
    {
      name: 'Notion AI',
      description: '智能筆記與知識管理工具，協助團隊更有效率地協作',
      image: 'assets/ai-tools/notion.png',
      category: '辦公協作'
    }
  ];
  
  // 團隊成員
  teamMembers: TeamMember[] = [
    {
      name: '蔡立忠',
      title: '理事長',
      photo: 'assets/teams/Richard.webp'
    },
    {
      name: '黃海潮',
      title: '副理事長',
      photo: 'assets/teams/Eric.webp'
    }
  ];
  
  // 使命與願景
  visionValues = [
    {
      title: '推廣 AI 知識',
      description: '透過課程、工作坊和研討會，普及 AI 知識和技能'
    },
    {
      title: '培育 AI 人才',
      description: '培養具備 AI 實務應用能力的各領域專業人才'
    },
    {
      title: '促進產學合作',
      description: '連結學術研究與產業需求，推動 AI 技術落地應用'
    },
    {
      title: '創新 AI 應用',
      description: '鼓勵跨領域合作，開發具社會影響力的 AI 解決方案'
    }
  ];

  ngOnInit() {
    // 初始化元件邏輯
  }

  getCourseIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'AI工具基礎課程': 'build',
      'AI趨勢分析': 'trending_up',
      'AI網頁設計': 'web',
      'AI數據行銷': 'analytics',
      'AI簡報設計': 'slideshow',
      '基礎課程': 'school',
      '進階課程': 'insights',
      '專業認證': 'workspace_premium'
    };
    
    return icons[category] || 'book';
  }

  getNewsIcon(title: string): string {
    if (title.includes('研討會') || title.includes('會議')) {
      return 'event';
    } else if (title.includes('免費') || title.includes('優惠')) {
      return 'local_offer';
    } else if (title.includes('合作') || title.includes('夥伴')) {
      return 'handshake';
    } else if (title.includes('新課程') || title.includes('課程')) {
      return 'class';
    } else if (title.includes('技術') || title.includes('AI')) {
      return 'psychology';
    }
    return 'article';
  }
}
