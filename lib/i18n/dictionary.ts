import type { Locale } from "./locale";

export type Dictionary = typeof en | typeof zh;

const en = {
  langSwitch: { toChinese: "中文", toEnglish: "EN" },
  skipToContent: "Skip to content",
  nav: {
    services: "Services",
    work: "Work",
    process: "How I work",
    about: "About",
    contact: "Contact",
    getQuote: "Get a quote",
    headerSubtitle: "· Automation dev",
  },
  hero: {
    eyebrow: "AI Automation & API Integration Developer",
    tagline: "I connect your business tools and add AI, so manual work runs by itself.",
    description:
      "Full-stack developer with about 10 years of experience (Vue, React, NestJS, Java, Python, Docker). I connect your tools with APIs and AI. When no-code is not enough, I write the code.",
    location: "Based in China (Asia/Shanghai (UTC+8)). I prefer written communication in English.",
    seeWork: "See my work",
    getQuote: "Get a quote",
  },
  services: {
    title: "Services",
    intro: "Clear scope, fixed quotes when possible, and real code you can own.",
    startingFrom: (price: string) => `Starting ${price}`,
    items: [
      {
        title: "Workflow automation & AI integration",
        description:
          "Connect n8n, Zapier, Make, or custom Python/Node.js flows. Chatbots with OpenAI or Claude, PDF and email data extraction, and AI agents that follow your rules.",
        advantages: [
          "Connect tools you already use instead of replacing them",
          "Grounded AI answers with sources—not open-ended guessing",
          "Hand off to a human when automation should stop",
          "Reusable templates you can extend later",
        ],
      },
      {
        title: "Fix & launch your app",
        description:
          "Fix, finish, and deploy existing web apps—including ones built with Lovable, Cursor, or Bolt. I start with a short audit report so you know what is wrong before we build.",
        advantages: [
          "Short written audit before big refactors",
          "Security headers, auth, and env secrets handled properly",
          "Before → after proof you can share with stakeholders",
          "Ship to production with tests where it matters",
        ],
      },
      {
        title: "Custom development & scraping",
        description:
          "Full-stack web apps and dashboards. Playwright browser automation and web scraping when you need reliable data from the open web.",
        advantages: [
          "Public-data-only framing—no bypassing paywalls or ToS",
          "Dashboards operators can actually use day to day",
          "Alerts when meaningful data changes—not noise",
          "Maintainable pipelines in TypeScript or Python",
        ],
      },
    ],
  },
  faqWidget: {
    toggleLabel: "Open quick help assistant",
    closeLabel: "Close help panel",
    panelTitle: "Quick answers",
    welcome: "Hi! Pick a question below—I’ll show a short answer. For a custom scope, use Contact or Get a quote.",
    backToQuestions: "← All questions",
    ctaQuote: "Get a quote",
    ctaContact: "Contact",
    ctaWork: "See work",
    chips: [
      {
        id: "services",
        question: "What services do you offer?",
        answer:
          "Three main areas: workflow automation & AI integration (connect n8n/Zapier/Make or custom code), fix & launch your app (audit-first for Lovable/Cursor/Bolt projects), and custom development & scraping (dashboards and Playwright pipelines). See the Services section for detail.",
      },
      {
        id: "pricing",
        question: "Typical starting prices / how pricing works",
        answer:
          "Listed “starting from” prices on the site are entry points for small, scoped tasks—automation from about $120 USD, app audit/fix from about $90 USD, scraping from about $80 USD. Larger work gets a written fixed quote after we agree on scope.",
      },
      {
        id: "timeline",
        question: "How long does a small project take?",
        answer:
          "Many small integrations or fixes land in about 1–2 weeks once scope is clear. I share a timeline in the written plan before work starts and ship a thin working slice early when possible.",
      },
      {
        id: "lovable",
        question: "Can you fix Lovable/Bolt/Cursor apps?",
        answer:
          "Yes—that’s a common Fix & launch engagement. I start with a short audit (secrets in the client, auth gaps, XSS, deploy config), then remediate and help you ship. The NoteFlow and Launch Audit Report demos on this site show that workflow.",
      },
      {
        id: "scraping",
        question: "Do you do scraping / automation?",
        answer:
          "Yes—workflow automation (APIs, webhooks, AI steps) and custom scraping with Playwright when you need reliable public-web data. I only work with data you’re allowed to collect and document the pipeline so you can maintain it.",
      },
      {
        id: "start",
        question: "How do we start?",
        answer:
          "Use the contact form with what you do by hand today, your tools, and rough budget/timeline. I reply within about one business day with clarifying questions or a short plan. You can also browse Work demos and hire via Upwork.",
      },
    ],
  },
  work: {
    title: "Work",
    intro: "Selected portfolio demos — each one has a live demo and public code.",
    upworkNoteBefore: "Browse the demos below, or hire me on ",
    upworkNoteAfter: ".",
    upworkLink: "Upwork",
    readCaseStudy: "Read case study →",
    inProgress: "In progress",
    pageDescription:
      "Portfolio demos with live sites and public code — AI automation, integrations, and production-ready apps.",
  },
  case: {
    backToWork: "← Back to work",
    problem: "Problem",
    solution: "Solution",
    stack: "Stack",
    viewRepo: "View repository",
    liveDemo: "Live demo",
    repoSoon: "Repository link coming soon",
    demoSoon: "Live demo coming soon",
    ctaBefore: "Want something similar? ",
    ctaQuote: "Get a quote",
    ctaMiddle: " or hire on ",
    ctaAfter: ".",
  },
  process: {
    title: "How I work",
    intro: "Simple steps. No surprises.",
    steps: [
      {
        title: "Tell me your tools and goal",
        body: "Share what you do by hand today, which apps you use, and what “done” looks like.",
      },
      {
        title: "Written plan, fixed price, timeline",
        body: "You get a short written plan with scope, price, and delivery dates before work starts.",
      },
      {
        title: "Small working part first",
        body: "We ship a thin slice early so you can test the flow and give feedback.",
      },
      {
        title: "Delivery with docs and support",
        body: (days: number) =>
          `You receive source code, a setup guide, and ${days} days of free bug fixes for issues in the agreed scope after launch.`,
      },
    ],
  },
  about: {
    title: "About",
    p1: (name: string) =>
      `Hi, I'm ${name}. I'm a full-stack developer with about 10 years of experience building web apps and integrations for teams in different industries.`,
    p2: "I focus on AI automation and API integration: connecting CRMs, spreadsheets, email, and custom apps so repetitive work runs on a schedule. When templates and no-code hit a wall, I write Python or TypeScript that you can maintain.",
    p3: (timezone: string, language: string) =>
      `I work remotely from China (${timezone}) and communicate in ${language}.`,
    stackHeading: "Tech stack",
  },
  contact: {
    title: "Contact / Get a quote",
    intro: "Tell me what you do by hand today. I usually reply within one business day.",
    name: "Name",
    email: "Email",
    message: "What do you do by hand today? / Project description",
    budget: "Budget range",
    timeline: "Timeline",
    mailtoHint: "Submit opens your email app with your message pre-filled.",
    send: "Send message",
    sending: "Sending…",
    sent: "Thanks! Your message was sent.",
    errorBefore: "Something went wrong. Please email me directly at ",
    errorAfter: ".",
    elsewhere: "Elsewhere",
    hireUpwork: "Hire on Upwork",
    bugFixNote: (days: number) =>
      `After delivery, I include ${days} days of bug fixes for issues in the agreed scope.`,
    mailtoSubject: "Project inquiry from portfolio",
    mailtoName: "Name",
    mailtoEmail: "Email",
    mailtoBudget: "Budget",
    mailtoTimeline: "Timeline",
    budgetOptions: ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+", "Not sure yet"],
    timelineOptions: ["ASAP", "2–4 weeks", "1–2 months", "Flexible"],
  },
  footer: {
    tagline: (timezone: string) => `AI Automation & API Integration · ${timezone}`,
    upwork: "Upwork",
    github: "GitHub",
    contact: "Contact",
    rights: (year: number, name: string) => `© ${year} ${name}. All rights reserved.`,
  },
  notFound: {
    title: "Page not found",
    body: "The page you’re looking for doesn’t exist or was moved.",
    home: "Back to home",
    work: "View work",
  },
} as const;

const zh = {
  langSwitch: { toChinese: "中文", toEnglish: "EN" },
  skipToContent: "跳到主要内容",
  nav: {
    services: "服务",
    work: "作品",
    process: "合作方式",
    about: "关于",
    contact: "联系",
    getQuote: "获取报价",
    headerSubtitle: "· 自动化开发",
  },
  hero: {
    eyebrow: "AI 自动化与 API 集成开发",
    tagline: "把你的业务工具和 AI 连起来，让手工重复的事自动跑。",
    description:
      "全栈开发，约 10 年经验（Vue、React、NestJS、Java、Python、Docker）。用 API 和 AI 连接你的工具；no-code 不够时，我来写代码。",
    location: "人在中国（Asia/Shanghai (UTC+8)），书面沟通以英文为主。",
    seeWork: "看作品",
    getQuote: "获取报价",
  },
  services: {
    title: "服务",
    intro: "范围清楚，尽量固定报价，代码归你所有。",
    startingFrom: (price: string) => `${price} 起`,
    items: [
      {
        title: "工作流自动化与 AI 集成",
        description:
          "连接 n8n、Zapier、Make，或自写 Python/Node.js 流程。OpenAI 或 Claude 客服、PDF/邮件数据提取、按规则运行的 AI agent。",
        advantages: [
          "对接你已在用的工具，而不是推倒重来",
          "有出处的 AI 回答，而不是随意编造",
          "该人工接手时顺畅转交",
          "可复用的模板，方便后续扩展",
        ],
      },
      {
        title: "修复并上线你的应用",
        description:
          "修复、补全并部署现有 Web 应用，包括 Lovable、Cursor、Bolt 生成的项目。先做简短体检报告，再动手改。",
        advantages: [
          "大改前先给简短书面审计",
          "处理好安全头、登录与环境密钥",
          "修复前后对比，方便对内说明",
          "该测的地方补测试，并协助上线",
        ],
      },
      {
        title: "定制开发与爬虫",
        description: "全栈 Web 应用与仪表盘。需要可靠抓取公开网页数据时用 Playwright 自动化与爬虫。",
        advantages: [
          "只处理你有权采集的公开数据",
          "运营同事日常能用的仪表盘",
          "有意义的变化才告警，而不是噪音",
          "TypeScript 或 Python 的可维护流水线",
        ],
      },
    ],
  },
  faqWidget: {
    toggleLabel: "打开快速问答助手",
    closeLabel: "关闭问答面板",
    panelTitle: "常见问题",
    welcome: "你好！点下面一个问题，我会给出简短回答。若要定制方案，请用「联系」或「获取报价」。",
    backToQuestions: "← 全部问题",
    ctaQuote: "获取报价",
    ctaContact: "联系",
    ctaWork: "查看作品",
    chips: [
      {
        id: "services",
        question: "你提供哪些服务？",
        answer:
          "主要有三块：工作流自动化与 AI 集成（n8n/Zapier/Make 或自写代码）、修复并上线应用（Lovable/Cursor/Bolt 项目先做审计）、定制开发与爬虫（仪表盘与 Playwright 流水线）。详情见「服务」区块。",
      },
      {
        id: "pricing",
        question: "起步价 / 报价怎么算？",
        answer:
          "网站上的「起价」是小范围任务的参考：自动化约 120 美元起、应用审计/修复约 90 美元起、爬虫约 80 美元起。范围更大时，先对齐需求再给书面固定报价。",
      },
      {
        id: "timeline",
        question: "小项目一般要多久？",
        answer:
          "范围清楚后，很多小集成或修复大约 1–2 周。开工前会给书面计划和时间线，并尽量先交付一条可跑通的最小版本。",
      },
      {
        id: "lovable",
        question: "能修 Lovable/Bolt/Cursor 做的应用吗？",
        answer:
          "可以，这是「修复并上线」里很常见的需求。先做简短审计（客户端密钥、登录缺口、XSS、部署配置等），再修复并协助上线。本站 NoteFlow 与上线审计报告演示就是这类流程。",
      },
      {
        id: "scraping",
        question: "做爬虫 / 自动化吗？",
        answer:
          "做——包括工作流自动化（API、webhook、AI 步骤）以及需要可靠公开网页数据时的 Playwright 爬虫。只处理合法可采集的数据，并写好文档方便你维护。",
      },
      {
        id: "start",
        question: "怎么开始合作？",
        answer:
          "在联系表单里说明现在手工在做什么、用的工具、大致预算和时间。通常一个工作日内回复。也可以先看「作品」演示，或通过 Upwork 雇佣。",
      },
    ],
  },
  work: {
    title: "作品",
    intro: "精选作品集演示——每个都有线上 demo 和公开代码。",
    upworkNoteBefore: "浏览下方演示，或在 ",
    upworkNoteAfter: " 上找我合作。",
    upworkLink: "Upwork",
    readCaseStudy: "阅读案例 →",
    inProgress: "进行中",
    pageDescription: "作品集演示：线上站点与公开代码——AI 自动化、集成与可上线应用。",
  },
  case: {
    backToWork: "← 返回作品列表",
    problem: "问题",
    solution: "方案",
    stack: "技术栈",
    viewRepo: "查看代码仓库",
    liveDemo: "线上演示",
    repoSoon: "代码仓库链接即将提供",
    demoSoon: "线上演示即将提供",
    ctaBefore: "想要类似的项目？",
    ctaQuote: "获取报价",
    ctaMiddle: " 或在 ",
    ctaAfter: " 上找我。",
  },
  process: {
    title: "合作方式",
    intro: "步骤简单，没有意外。",
    steps: [
      {
        title: "告诉我你的工具和目标",
        body: "说明现在手工在做什么、用哪些应用、「完成」长什么样。",
      },
      {
        title: "书面方案、固定价格、时间表",
        body: "开工前给你简短书面方案：范围、价格和交付日期。",
      },
      {
        title: "先做一小段能用的",
        body: "尽早交付一条薄切片，方便你试流程并反馈。",
      },
      {
        title: "交付代码、文档与支持",
        body: (days: number) =>
          `交付源代码、部署说明，以及上线后 ${days} 天内、约定范围内问题的免费 bug 修复。`,
      },
    ],
  },
  about: {
    title: "关于",
    p1: (name: string) =>
      `你好，我是 ${name}。全栈开发约 10 年，为不同行业团队做 Web 应用和系统集成。`,
    p2: "专注 AI 自动化与 API 集成：连接 CRM、表格、邮件和自研应用，让重复工作按计划自动跑。模板和 no-code 到顶时，我写你能维护的 Python 或 TypeScript。",
    p3: (timezone: string, language: string) =>
      `远程在中国（${timezone}），书面沟通语言：${language}。`,
    stackHeading: "技术栈",
  },
  contact: {
    title: "联系 / 获取报价",
    intro: "说说你现在手工在做什么。通常一个工作日内回复。",
    name: "姓名",
    email: "邮箱",
    message: "你现在手工在做什么？/ 项目描述",
    budget: "预算范围",
    timeline: "时间要求",
    mailtoHint: "提交会打开邮件客户端，并预填你的内容。",
    send: "发送",
    sending: "发送中…",
    sent: "谢谢！消息已发送。",
    errorBefore: "出错了。请直接发邮件到 ",
    errorAfter: "。",
    elsewhere: "其他渠道",
    hireUpwork: "在 Upwork 上雇佣",
    bugFixNote: (days: number) => `交付后，约定范围内的问题提供 ${days} 天 bug 修复。`,
    mailtoSubject: "作品集网站项目咨询",
    mailtoName: "姓名",
    mailtoEmail: "邮箱",
    mailtoBudget: "预算",
    mailtoTimeline: "时间",
    budgetOptions: ["500 美元以下", "500 – 1,500 美元", "1,500 – 5,000 美元", "5,000 美元以上", "暂不确定"],
    timelineOptions: ["尽快", "2–4 周", "1–2 个月", "灵活"],
  },
  footer: {
    tagline: (timezone: string) => `AI 自动化与 API 集成 · ${timezone}`,
    upwork: "Upwork",
    github: "GitHub",
    contact: "联系",
    rights: (year: number, name: string) => `© ${year} ${name}。保留所有权利。`,
  },
  notFound: {
    title: "页面未找到",
    body: "你要找的页面不存在或已移动。",
    home: "返回首页",
    work: "查看作品",
  },
} as const;

const dictionaries = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export { en, zh };
