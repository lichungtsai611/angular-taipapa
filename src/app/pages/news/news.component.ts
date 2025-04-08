import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Course {
  title: string;
  organization: string;
  date: string;
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
      date: '2025年3月5日'
    },
    {
      title: '基礎統計模型',
      organization: 'NCCUDAC',
      date: '2025年5月8日'
    },
    {
      title: 'AI 秒生成設計感爆棚的圖表',
      organization: '新北市工商發展投資策進會',
      date: '2025年5月8日'
    },
    {
      title: '新興人工智慧技術及產業趨勢商機',
      organization: '健行科技大學',
      date: '2025年5月14日'
    },
    {
      title: '解鎖職場探險指南-AI時代求職生存指南',
      organization: '健行科技大學',
      date: '2025年5月16日'
    },
    {
      title: '生成式 AI 與 ChatGPT 基礎應用',
      organization: '經濟部經貿人員培訓所',
      date: '2025年5月22日'
    },
    {
      title: '進階生成式 AI 應用與多元工具',
      organization: '經濟部經貿人員培訓所',
      date: '2025年5月23日'
    },
    {
      title: 'AI 秒生成設計感爆棚的圖表',
      organization: '臺北醫學大學',
      date: '2025年6月11日'
    },
    {
      title: 'CANVA 資料視覺化',
      organization: '臺北醫學大學',
      date: '2025年7月25日'
    },
    {
      title: 'AI 人工智慧的發展趨勢及產業運用',
      organization: '新北市政府就業服務處',
      date: '2025年9月5日'
    },
    {
      title: 'AI 時代來臨～從跨域尋找新思維',
      organization: '宜蘭縣政府',
      date: '2025年10月14日'
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
