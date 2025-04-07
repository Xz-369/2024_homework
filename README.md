# Topic structure diagram

graph TD
    A[使用者] --> B[互動地圖模組]
    B --> B1[查詢台灣沿海海洋生物資訊]
    B1 --> B2[整合政府開放資料與可信文獻]

    A --> C[AR圖卡掃描模組]
    C --> C1[掃描生物圖卡圖片]
    C1 --> C2[觸發AR動畫與3D模型展示]
    C2 --> C3[使用 Unity + Vuforia 實現]

    A --> D[3D展示互動模組]
    D --> D1[旋轉、縮放模型]
    D1 --> D2[增強沉浸式學習體驗]
    D2 --> D3[支援Android平台]

    subgraph 系統開發流程
        E1[需求分析]
        E2[系統設計]
        E3[模組開發]
        E4[測試與修改]
        E1 --> E2 --> E3 --> E4
    end

    subgraph 研究方法
        F1[系統開發]
        F2[使用者經驗評估]
    end

    系統開發流程 --> F1
