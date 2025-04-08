import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Course {
  title: string;
  organization: string;
  date: string;
  description: string[];
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
      date: '2025年3月5日',
      description: [
        '學習統計分析在AI領域的實際應用方法',
        '掌握資料清理、特徵工程和模型評估技巧',
        '運用統計模型解決實際業務問題的案例分析'
      ]
    },
    {
      title: '基礎統計模型',
      organization: 'NCCUDAC',
      date: '2025年5月8日',
      description: [
        '了解統計學基本概念與AI的關聯性',
        '學習描述性統計和推論統計的基礎知識',
        '掌握資料分析與視覺化的基本方法'
      ]
    },
    {
      title: 'AI 秒生成設計感爆棚的圖表',
      organization: '新北市工商發展投資策進會',
      date: '2025年5月8日',
      description: [
        '運用AI工具快速生成專業級數據視覺化圖表',
        '學習圖表設計的關鍵視覺原則與技巧',
        '掌握針對不同受眾的資料呈現方法'
      ]
    },
    {
      title: '新興人工智慧技術及產業趨勢商機',
      organization: '健行科技大學',
      date: '2025年5月14日',
      description: [
        '探討最新AI技術發展與未來趨勢',
        '分析AI在各產業的商業應用與投資機會',
        '了解企業數位轉型中的AI策略規劃'
      ]
    },
    {
      title: '解鎖職場探險指南-AI時代求職生存指南',
      organization: '健行科技大學',
      date: '2025年5月16日',
      description: [
        '掌握AI時代求職必備的技能與心態',
        '學習運用AI工具優化履歷與面試表現',
        '了解未來職場中AI與人類合作的模式'
      ]
    },
    {
      title: '生成式 AI 與 ChatGPT 基礎應用',
      organization: '經濟部經貿人員培訓所',
      date: '2025年5月22日',
      description: [
        '了解生成式AI和大型語言模型的基本原理',
        '學習ChatGPT的有效提示技巧與使用方法',
        '掌握生成式AI在專業領域的實用案例'
      ]
    },
    {
      title: '進階生成式 AI 應用與多元工具',
      organization: '經濟部經貿人員培訓所',
      date: '2025年5月23日',
      description: [
        '深入探討生成式AI的進階應用方法',
        '掌握多種AI工具的整合使用策略',
        '學習自定義AI工作流程以提升工作效率'
      ]
    },
    {
      title: 'AI 秒生成設計感爆棚的圖表',
      organization: '臺北醫學大學',
      date: '2025年6月11日',
      description: [
        '使用AI工具創建醫療數據的專業視覺化呈現',
        '學習醫學研究中的數據圖表設計原則',
        '掌握科學數據視覺化的清晰有效表達方法'
      ]
    },
    {
      title: 'CANVA 資料視覺化',
      organization: '臺北醫學大學',
      date: '2025年7月25日',
      description: [
        '學習使用Canva進行專業資料視覺化設計',
        '掌握醫療數據的有效視覺呈現技巧',
        '運用模板和自定義設計創建專業報告圖表'
      ]
    },
    {
      title: 'AI 人工智慧的發展趨勢及產業運用',
      organization: '新北市政府就業服務處',
      date: '2025年9月5日',
      description: [
        '了解AI技術最新發展與未來五年趨勢',
        '探討AI在各產業的創新應用案例',
        '分析AI人才需求與就業市場變化'
      ]
    },
    {
      title: 'AI 時代來臨～從跨域尋找新思維',
      organization: '宜蘭縣政府',
      date: '2025年10月14日',
      description: [
        '探討AI如何促進跨領域創新與合作',
        '學習整合不同專業知識發展AI應用',
        '案例分析：AI在地方特色產業的創新機會'
      ]
    }
  ];

  /**
   * 依照日期從近到遠排序課程
   */
  get sortedCourses(): Course[] {
    return [...this.allCourses].sort((a, b) => {
      const dateA = this.parseChineseDate(a.date);
      const dateB = this.parseChineseDate(b.date);
      return dateA.getTime() - dateB.getTime();
    });
  }

  /**
   * 獲取未來3個月內的課程
   */
  get upcomingCourses(): Course[] {
    const today = new Date();
    const threeMonthsLater = new Date();
    threeMonthsLater.setMonth(today.getMonth() + 3);
    
    return this.sortedCourses.filter(course => {
      const courseDate = this.parseChineseDate(course.date);
      return courseDate >= today && courseDate <= threeMonthsLater;
    });
  }

  ngOnInit(): void {
    // 初始化時按日期排序課程
    this.allCourses = this.getSortedCourses();
  }

  /**
   * 獲取按日期排序的課程
   */
  private getSortedCourses(): Course[] {
    return [...this.newsCourses].sort((a, b) => {
      const dateA = this.parseChineseDate(a.date);
      const dateB = this.parseChineseDate(b.date);
      return dateA.getTime() - dateB.getTime();
    });
  }

  /**
   * 解析中文日期格式 (例如: "2025年5月8日") 為 Date 對象
   */
  private parseChineseDate(dateString: string): Date {
    const cleanedDate = dateString.replace(/年|月|日/g, '-');
    const dateParts = cleanedDate.split('-').filter(part => part.trim() !== '');
    
    if (dateParts.length >= 3) {
      const year = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1; // JavaScript 月份從 0 開始
      const day = parseInt(dateParts[2]);
      
      return new Date(year, month, day);
    }
    
    return new Date(); // 如果解析失敗，返回當前日期
  }
}
