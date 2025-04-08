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

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  searchKeyword: string = '';
  allCourseCategories: CourseCategory[] = [
    {
      title: '基礎課程',
      description: '為AI新手設計的入門課程，無需技術背景',
      courses: [
        {
          title: 'AI概念與應用入門',
          duration: '3小時',
          target: '對AI感興趣的一般大眾',
          price: '$1,200'
        },
        {
          title: 'AI工具基礎應用',
          duration: '6小時',
          target: '希望學習基礎AI工具的使用者',
          price: '$2,500'
        }
      ]
    },
    {
      title: '進階課程',
      description: '深入AI應用與技術實踐的課程',
      courses: [
        {
          title: 'AI驅動的商業決策',
          duration: '12小時',
          target: '企業管理者、決策分析師',
          price: '$5,800'
        },
        {
          title: '產業AI解決方案設計',
          duration: '18小時',
          target: '產品經理、方案設計師',
          price: '$7,200'
        }
      ]
    },
    {
      title: '專業認證',
      description: '獲取AI專業技能認證的培訓課程',
      courses: [
        {
          title: 'AI應用專家認證班',
          duration: '36小時',
          target: '希望獲得AI專業認證的從業人員',
          price: '$15,000'
        },
        {
          title: 'AI顧問培訓認證班',
          duration: '48小時',
          target: '希望成為AI顧問的專業人士',
          price: '$22,000'
        }
      ]
    }
  ];
  courseCategories: CourseCategory[] = this.allCourseCategories;

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
