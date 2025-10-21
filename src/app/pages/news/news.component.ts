import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Course {
  title: string;
  organization: string;
  date: string;
  description: string[];
  lecturer: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  allCourses: Course[] = [];
  
  newsCourses: Course[] = [
    {
      title: '實用統計模型',
      organization: 'NTUDAC',
      date: '2025-03-05',
      lecturer: '黃海潮老師',
      description: [
        '統計方法於資料分析與AI的實務應用',
        '資料清理、特徵工程與模型評估',
        '案例演練提升決策與溝通能力'
      ]
    },
    {
      title: '基礎統計模型',
      organization: 'NCCUBAC',
      date: '2025-05-08',
      lecturer: '蔡立忠老師',
      description: [
        '統計學核心概念與AI的連結',
        '描述統計與推論統計入門',
        '資料視覺化與解讀基礎'
      ]
    },
    {
      title: '人工智慧的發展與應用，從原理到現代商業實務',
      organization: '南華大學',
      date: '2025-05-13',
      lecturer: '黃海潮老師',
      description: [
        'AI原理到商業應用的完整脈絡',
        '跨產業導入案例與效益評估',
        '導入流程與組織變革要點'
      ]
    },
    {
      title: '新興人工智慧技術及產業趨勢商機',
      organization: '健行科技大學',
      date: '2025-05-14',
      lecturer: '蔡立忠老師',
      description: [
        '最新AI技術版圖與關鍵突破',
        '產業應用版圖與商機解析',
        '企業數位轉型的策略路線'
      ]
    },
    {
      title: '解鎖職場探險指南-AI時代求職生存指南',
      organization: '健行科技大學',
      date: '2025-05-16',
      lecturer: '黃海潮老師',
      description: [
        'AI時代的職涯心態與必備技能',
        '履歷優化與面試實戰技巧',
        'AI與人協作的工作新型態'
      ]
    },
    {
      title: '政治大學 DAC 職涯分享',
      organization: 'NCCUDAC',
      date: '2025-05-17',
      lecturer: '黃海潮老師',
      description: [
        '資料與AI相關職涯路徑解析',
        '能力地圖與學習資源建議',
        '求職實務與面試經驗分享'
      ]
    },
    {
      title: 'AI 大數據分析與資料視覺化',
      organization: '中原大學',
      date: '2025-05-21',
      lecturer: '蔡立忠老師',
      description: [
        '資料前處理與探索式分析流程',
        '有效的資料視覺化設計原則',
        '互動式儀表板與案例實作'
      ]
    },
    {
      title: '生成式 AI 與 ChatGPT 基礎應用',
      organization: '經濟部經貿人員培訓所',
      date: '2025-05-22',
      lecturer: '蔡立忠老師',
      description: [
        '大型語言模型與生成式AI基礎',
        '提示工程與常見應用場景',
        '辦公自動化與產能提升範例'
      ]
    },
    {
      title: '進階生成式 AI 應用與多元工具',
      organization: '經濟部經貿人員培訓所',
      date: '2025-05-23',
      lecturer: '黃海潮老師',
      description: [
        '多工具整合與工作流程自動化',
        '進階提示策略與品質控管',
        '風險治理與組織導入建議'
      ]
    },
    {
      title: '職場數位工具與 AI 運用：行事曆與專案管理實務（以 Notion 為主）',
      organization: '中原大學',
      date: '2025-05-28',
      lecturer: '黃海潮老師',
      description: [
        '行事曆與專案管理實務流程',
        'Notion資料庫與自動化實作',
        '團隊協作與流程最佳化'
      ]
    },
    {
      title: 'POWERPOINT與GAMMA AI的高效應用',
      organization: '新北市衛生局心衛中心',
      date: '2025-06-02',
      lecturer: '黃海潮老師',
      description: [
        'AI輔助簡報與內容生成技巧',
        'Gamma與PPT協作製作流程',
        '視覺溝通與版面設計要訣'
      ]
    },
    {
      title: 'AI 秒生成設計感爆棚的圖表',
      organization: '臺北醫學大學',
      date: '2025-06-11',
      lecturer: '黃海潮老師',
      description: [
        '快速生成專業級數據圖表',
        '視覺設計原則與色彩運用',
        '依受眾調整資訊呈現'
      ]
    },
    {
      title: 'AI 秒生成設計感爆棚的圖表',
      organization: '臺北醫學大學',
      date: '2025-07-04',
      lecturer: '黃海潮老師',
      description: [
        '快速生成專業級數據圖表',
        '視覺設計原則與色彩運用',
        '依受眾調整資訊呈現'
      ]
    },
    {
      title: 'ChatGPT 與 AI 工具在公務流程中的高效應用',
      organization: '新北市衛生局心衛中心',
      date: '2025-07-14',
      lecturer: '蔡立忠老師',
      description: [
        '公務流程的AI應用與範例',
        '表單、文書與紀錄自動化',
        '資安與合規注意事項'
      ]
    },
    {
      title: '用Excel與ChatGPT打造高效AI小幫手',
      organization: '新北市政府產業策進',
      date: '2025-07-17',
      lecturer: '黃海潮老師',
      description: [
        'Excel與AI整合的實戰技巧',
        '函數、巨集與自動化應用',
        '資料處理到報表的一條龍'
      ]
    },
    {
      title: 'CANVA 資料視覺化',
      organization: '臺北醫學大學',
      date: '2025-07-22',
      lecturer: '黃海潮老師',
      description: [
        'Canva圖表與資訊設計方法',
        '模板選用與品牌一致性',
        '輸出報告與簡報最佳實務'
      ]
    },
    {
      title: '生成式 AI 與 ChatGPT 基礎應用-掌握 ChatGPT 基本操作與辦公應用',
      organization: '菸酒公司政風處',
      date: '2025-08-04',
      lecturer: '蔡立忠老師',
      description: [
        'ChatGPT基本操作與最佳實務',
        '常見辦公場景與自動化範例',
        '風險與限制的正確認知'
      ]
    },
    {
      title: 'AI 工作術：打造高校自動人生',
      organization: '新明青創基地',
      date: '2025-08-13',
      lecturer: '黃海潮老師',
      description: [
        '設計個人高效工作流程',
        '自動化工具選型與整合',
        '建立可持續的生產力系統'
      ]
    },
    {
      title: '數位工具與AI運用 : 行事曆與專案管理實務(以Notion為主)',
      organization: '玄奘大學',
      date: '2025-09-03',
      lecturer: '蔡立忠老師',
      description: [
        '行事曆規劃與任務追蹤',
        'Notion工作區與資料庫設計',
        '協作規範與流程優化'
      ]
    },
    {
      title: 'AI 人工智慧的發展趨勢及產業運用',
      organization: '新北市政府就業服務處',
      date: '2025-09-05',
      lecturer: '黃海潮老師',
      description: [
        'AI發展趨勢與影響',
        '產業導入案例與價值',
        '人才需求與職能盤點'
      ]
    },
    {
      title: 'Python 101',
      organization: '經濟部經貿人員培訓所',
      date: '2025-09-17',
      lecturer: '黃海潮老師',
      description: [
        'Python基礎語法與環境',
        '資料處理與常用套件',
        '實作練習建立基礎能力'
      ]
    },
    {
      title: 'AI 數據應用',
      organization: '國立台北大學',
      date: '2025-10-16',
      lecturer: '黃海潮老師',
      description: [
        '數據驅動決策與應用場景',
        '指標設計與資料管線',
        '分析流程與儀表板呈現'
      ]
    },
    {
      title: 'AIxExcel',
      organization: '台灣菸酒公司',
      date: '2025-10-29',
      lecturer: '黃海潮老師',
      description: [
        'Excel進階功能結合AI工具',
        '資料清理、計算與視覺化',
        '日常工作自動化的技巧'
      ]
    },
    {
      title: 'AI 時代來臨～從跨域尋找新思維',
      organization: '宜蘭縣政府',
      date: '2025-10-14',
      lecturer: '黃海潮老師',
      description: [
        '跨域整合激發創新與價值',
        '多專業合作的實務方法',
        '在地產業的AI應用案例'
      ]
    },
    {
      title: '運用AI工具進行時間管理',
      organization: '長庚科技大學',
      date: '2025-10-14',
      lecturer: '蔡立忠老師',
      description: [
        '跨域整合激發創新與價值',
        '多專業合作的實務方法',
        '在地產業的AI應用案例'
      ]
    },
    {
      title: 'AI 工具來助攻－圖卡設計與海報製作',
      organization: '臺南市政府公務人力發展中心',
      date: '2025-10-20',
      lecturer: '廖文碩老師',
      description: [
        'Canva x AI - 自製專屬素材',
        'Canva x 範本 - 打造個人模板',
        '視覺設計心法與案例演練'
      ]
    },
    {
      title: 'AI全方位應用:從日常到職場的智慧進化',
      organization: '士林區戶政事務所',
      date: '2025-10-20',
      lecturer: '黃海潮老師',
      description: [
        '日常生活導入AI工具的實戰技巧',
        '職場流程自動化與效率提升策略',
        'AI時代必備的數位素養與風險意識'
      ]
    },
    {
      title: 'Demo Day 生存指南：怎麼上台不怯場？',
      organization: '長庚科技大學',
      date: '2025-11-01',
      lecturer: '廖文碩老師',
      description: [
        'Canva x 簡報 - 資訊設計 SOP',
        'Canva x AI - 客製化視覺應用',
        '提案簡報邏輯與舞台表達技巧'
      ]
    },
    {
      title: 'Python 101',
      organization: '經濟部經貿人員培訓所',
      date: '2025-11-05',
      lecturer: '黃海潮老師',
      description: [
        'Python基礎語法與環境',
        '資料處理與常用套件',
        '實作練習建立基礎能力'
      ]
    },
    {
      title: '精準傳達你の簡報資訊',
      organization: '國立政治大學',
      date: '2025-11-13',
      lecturer: '廖文碩老師',
      description: [
        '簡報 × AI 工具協作思維',
        '強化資訊傳達的八大元素',
        '簡報資訊設計的整理五步驟'
      ]
    },
    {
      title: 'AI 生活應用',
      organization: '台北教育大學',
      date: '2025-11-19',
      lecturer: '黃海潮老師',
      description: [
        '日常生活中可落地的AI工具',
        '情境式應用與實例演練',
        '提升數位素養與效率'
      ]
    },
    {
      title: 'AI 時代: 做個不被淘汰的人才',
      organization: '臺北市私立復興實驗高級中學',
      date: '2025-12-01',
      lecturer: '黃海潮老師',
      description: [
        '掌握AI驅動的產業趨勢與機會',
        '打造跨域競爭力的學習與應用策略',
        '規劃未來職涯的核心技能組合'
      ]
    }
  ];

  ngOnInit(): void {
    this.allCourses = this.getSortedCourses();
  }

  getLecturerPhoto(lecturerName: string): string {
    if (lecturerName.includes('蔡立忠')) {
      return 'assets/teams/蔡立忠.webp';
    } else if (lecturerName.includes('黃海潮')) {
      return 'assets/teams/黃海潮.webp';
    }else if (lecturerName.includes('廖文碩')) {
      return 'assets/teams/廖文碩.webp';
    }else if (lecturerName.includes('韓諆璋')) {
      return 'assets/teams/韓諆璋.webp';
    }else if (lecturerName.includes('吳仁凱')) {
      return 'assets/teams/吳仁凱.webp';
    }else if (lecturerName.includes('陳建哲')) {
      return 'assets/teams/陳建哲.webp';
    }
    return 'assets/teams/default.webp'; // fallback
  }

  private getSortedCourses(): Course[] {
    return [...this.newsCourses].sort((a, b) => {
      const dateA = this.parseChineseDate(a.date);
      const dateB = this.parseChineseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }

  private parseChineseDate(dateString: string): Date {
    const trimmed = dateString.trim();
    // Support ISO format: YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      const [yearStr, monthStr, dayStr] = trimmed.split('-');
      const year = parseInt(yearStr, 10);
      const month = parseInt(monthStr, 10) - 1;
      const day = parseInt(dayStr, 10);
      return new Date(year, month, day);
    }

    // Fallback: Chinese format e.g. 2025年3月5日
    const cleanedDate = trimmed.replace(/年|月|日/g, '-');
    const dateParts = cleanedDate.split('-').filter(part => part.trim() !== '');
    if (dateParts.length >= 3) {
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // JavaScript 月份從 0 開始
      const day = parseInt(dateParts[2], 10);
      return new Date(year, month, day);
    }

    return new Date();
  }
}
