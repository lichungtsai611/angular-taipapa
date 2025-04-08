import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-resources.component.html',
  styleUrl: './ai-resources.component.scss'
})
export class AiResourcesComponent {
  aiTools = [
    {
      name: 'ChatGPT',
      description: '基於GPT模型的對話式AI助手，可用於文字生成、回答問題、創意寫作等多種場景。',
      useCases: '內容創作、學習輔助、程式編寫、客服自動化',
      link: 'https://chat.openai.com/',
      icon: 'assets/images/chatgpt-icon.png'
    },
    {
      name: 'Gemini',
      description: 'Google開發的多模態AI，可處理文字、圖像、音訊等多種資料類型。',
      useCases: '多媒體分析、知識探索、創意生成、專業研究',
      link: 'https://gemini.google.com/',
      icon: 'assets/images/gemini-icon.png'
    },
    {
      name: 'Notion AI',
      description: '整合於Notion中的AI助手，幫助用戶更高效地管理筆記、文件和專案。',
      useCases: '筆記摘要、內容改寫、創意發想、自動整理',
      link: 'https://www.notion.so/product/ai',
      icon: 'assets/images/notion-icon.png'
    },
    {
      name: 'LINE Chatbot',
      description: '可在LINE平台上打造的聊天機器人，適合企業客服、資訊查詢等場景。',
      useCases: '自動客服、訊息推送、資訊查詢、會員互動',
      link: 'https://developers.line.biz/en/',
      icon: 'assets/images/line-icon.png'
    },
    {
      name: 'Canva AI',
      description: 'Canva整合的AI設計助手，協助用戶快速生成與編輯各種視覺設計。',
      useCases: '圖片生成、設計優化、風格統一、文字編排',
      link: 'https://www.canva.com/',
      icon: 'assets/images/canva-icon.png'
    }
  ];
}
