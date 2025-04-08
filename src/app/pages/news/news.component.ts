import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  allCourses: any[] = [];
  
  newsCourses = [
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

  // 依照日期排序
  sortedCourses = [...this.newsCourses].sort((a, b) => {
    const dateA = new Date(a.date.replace(/年|月|日/g, '-'));
    const dateB = new Date(b.date.replace(/年|月|日/g, '-'));
    return dateA.getTime() - dateB.getTime();
  });

  // 過濾近期課程（未來3個月）
  get upcomingCourses() {
    const today = new Date();
    const threeMonthsLater = new Date();
    threeMonthsLater.setMonth(today.getMonth() + 3);
    
    return this.sortedCourses.filter(course => {
      const courseDate = new Date(course.date.replace(/年|月|日/g, '-'));
      return courseDate >= today && courseDate <= threeMonthsLater;
    });
  }

  ngOnInit(): void {
    // 初始化課程數據
    this.allCourses = [...this.newsCourses];
  }
}
