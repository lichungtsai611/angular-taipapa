import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface AITool {
  name: string;
  description: string;
  image: string;
  link: string;
  category: string;
  features: string[];
}

@Component({
  selector: 'app-ai-resources',
  templateUrl: './ai-resources.component.html',
  styleUrls: ['./ai-resources.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AIResourcesComponent {
  categories = [
    '文字生成',
    '圖像設計',
    '辦公協作',
    '通訊工具'
  ];

  selectedCategory: string = '所有工具';

  aiTools: AITool[] = [
    {
      name: 'ChatGPT',
      description: '強大的自然語言處理AI，能夠進行對話、寫作、編程等多種任務',
      image: 'assets/ai-tools/chatgpt.png',
      link: 'https://chat.openai.com',
      category: '文字生成',
      features: [
        '自然語言對話',
        '文章寫作',
        '程式碼生成',
        '邏輯分析'
      ]
    },
    {
      name: 'Gemini',
      description: 'Google 開發的多模態 AI 模型，支援文字、圖像、代碼等多種輸入',
      image: 'assets/ai-tools/gemini.png',
      link: 'https://gemini.google.com',
      category: '文字生成',
      features: [
        '多模態理解',
        '程式開發',
        '圖像分析',
        '知識問答'
      ]
    },
    {
      name: 'Canva',
      description: '整合 AI 功能的線上設計工具，讓設計變得更簡單直覺',
      image: 'assets/ai-tools/canva.png',
      link: 'https://www.canva.com',
      category: '圖像設計',
      features: [
        'AI 圖像生成',
        '版面設計',
        '簡報製作',
        '社群圖片'
      ]
    },
    {
      name: 'Notion AI',
      description: '智能筆記與知識管理工具，協助團隊更有效率地協作',
      image: 'assets/ai-tools/notion.png',
      link: 'https://www.notion.so',
      category: '辦公協作',
      features: [
        '智能筆記',
        '知識管理',
        '團隊協作',
        '專案管理'
      ]
    },
    {
      name: 'LINE',
      description: '整合 AI 助理的即時通訊平台，提供智能對話與服務',
      image: 'assets/ai-tools/line.png',
      link: 'https://line.me',
      category: '通訊工具',
      features: [
        'AI 助理',
        '智能客服',
        '群組管理',
        '生活服務'
      ]
    }
  ];

  get filteredTools(): AITool[] {
    if (this.selectedCategory === '所有工具') {
      return this.aiTools;
    }
    return this.aiTools.filter(tool => tool.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
