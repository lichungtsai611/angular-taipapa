import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Course {
  title: string;
  duration: string;
  target: string;
  price: string;
}

interface CourseCategory {
  title: string;
  description: string;
  courses: Course[];
}

interface CoursePlan {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  searchKeyword: string = '';
  
  // 課程類別
  allCourseCategories: CourseCategory[] = [
    {
      title: 'AI工具基礎課程',
      description: '掌握常用AI工具的核心功能與應用技巧',
      courses: [
        {
          title: 'ChatGPT應用技巧',
          duration: '6小時',
          target: '所有想提升工作效率的專業人士',
          price: '$2,500'
        },
        {
          title: 'Midjourney圖像生成實務',
          duration: '8小時',
          target: '設計師、行銷人員、內容創作者',
          price: '$3,200'
        }
      ]
    },
    {
      title: 'AI趨勢分析',
      description: '了解AI技術發展趨勢與產業應用前景',
      courses: [
        {
          title: 'AI趨勢與商業應用',
          duration: '4小時',
          target: '企業決策者、經理人',
          price: '$3,800'
        },
        {
          title: '產業AI轉型策略',
          duration: '12小時',
          target: '產業分析師、策略規劃人員',
          price: '$6,500'
        }
      ]
    },
    {
      title: 'AI網頁設計',
      description: '運用AI工具加速網頁設計與開發流程',
      courses: [
        {
          title: 'AI驅動的UX/UI設計',
          duration: '16小時',
          target: '網頁設計師、UI/UX設計師',
          price: '$7,200'
        },
        {
          title: 'AI輔助前端開發',
          duration: '20小時',
          target: '前端開發人員、網站工程師',
          price: '$8,500'
        }
      ]
    },
    {
      title: 'AI數據行銷',
      description: '結合AI與數據分析優化行銷策略',
      courses: [
        {
          title: 'AI行銷策略與實務',
          duration: '12小時',
          target: '行銷人員、社群經理',
          price: '$5,800'
        },
        {
          title: 'AI數據分析與應用',
          duration: '16小時',
          target: '數據分析師、行銷策略師',
          price: '$7,500'
        }
      ]
    },
    {
      title: 'AI簡報設計',
      description: '使用AI工具創造專業高效的簡報',
      courses: [
        {
          title: 'AI簡報設計與呈現技巧',
          duration: '8小時',
          target: '專業經理人、業務人員、講師',
          price: '$4,200'
        },
        {
          title: '視覺化數據簡報製作',
          duration: '10小時',
          target: '企業管理者、專案經理',
          price: '$5,500'
        }
      ]
    }
  ];
  
  courseCategories: CourseCategory[] = this.allCourseCategories;
  
  // 課程方案
  coursePlans: CoursePlan[] = [
    {
      title: '企業內訓',
      icon: 'group',
      description: '為您的團隊量身打造專屬訓練課程，提升工作效率與競爭力',
      features: [
        '客製化課程內容',
        '彈性時間安排',
        '真實案例演練',
        '依企業需求調整教學方向',
        '提供課後諮詢服務'
      ]
    },
    {
      title: '公開課程',
      icon: 'calendar_month',
      description: '定期舉辦多元主題公開課程，讓您隨時學習最新技能',
      features: [
        '多樣化課程主題',
        '小班制精緻教學',
        '實作演練與互動',
        '認證各領域專業人士',
        '課程證書頒發'
      ]
    },
    {
      title: '單位邀請',
      icon: 'school',
      description: '學校、協會、社團等單位專屬課程，打造知識交流平台',
      features: [
        '針對特定族群設計課程',
        '理論與實務並重',
        '多元互動教學',
        '跨領域知識整合',
        '講師資源推薦'
      ]
    }
  ];

  onSearch(): void {
    if (!this.searchKeyword.trim()) {
      this.courseCategories = this.allCourseCategories;
      return;
    }

    const keyword = this.searchKeyword.toLowerCase().trim();
    
    this.courseCategories = this.allCourseCategories
      .map(category => {
        const filteredCourses = category.courses.filter(course => 
          course.title.toLowerCase().includes(keyword) || 
          course.target.toLowerCase().includes(keyword)
        );
        
        if (filteredCourses.length === 0) {
          return null;
        }
        
        return {
          ...category,
          courses: filteredCourses
        };
      })
      .filter((category): category is CourseCategory => category !== null);
  }
}
