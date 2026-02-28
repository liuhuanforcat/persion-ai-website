# AI 网站生成系统技术方案

## 📋 项目概述

### 项目目标
构建一套通用的 AI 驱动网站开发系统，通过 DSL 配置 + Agent 执行 + Skills 技能库的架构，实现快速复刻各种类型的官网，提高网站开发效率和标准化程度。

### 核心价值
- ⚡ **高效**: 从需求到上线，缩短 80% 开发时间
- 🔄 **可复用**: 一次开发，无限复刻
- 🎯 **标准化**: 统一技术栈和开发规范
- 🤖 **智能化**: AI 自动决策和代码生成
- 🔧 **可扩展**: 插件化架构，持续演进

---

## 🏗️ 整体架构

### 系统架构图

```
┌─────────────────────────────────────────────────────────────┐
│                        输入层                                 │
│  自然语言描述 / DSL配置 / 参考网站URL / 设计稿               │
└─────────────────────┬───────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────┐
│                    智能解析层                                 │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ 需求分析    │  │ 配置生成     │  │ Skills选择    │       │
│  │ Agent       │→ │ Agent        │→ │ Agent         │       │
│  └─────────────┘  └──────────────┘  └──────────────┘       │
└─────────────────────┬───────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────┐
│                    执行引擎层                                 │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Skills 技能库                            │   │
│  │  基础Skills │ 组件Skills │ 功能Skills │ 部署Skills   │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              模板仓库                                 │   │
│  │  Next.js模板 │ 组件库 │ 主题系统 │ 配置预设         │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────┬───────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────┐
│                    质量保障层                                 │
│  自动化测试 │ 性能检测 │ 浏览器预览 │ SEO检查             │
└─────────────────────┬───────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────┐
│                    输出层                                     │
│  源码仓库 │ 预览部署 │ 生产部署 │ 文档说明                │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 核心模块设计

### 1. DSL（领域特定语言）设计

#### 1.1 设计原则
- **简洁性**: 只描述必要信息，细节由 AI 补充
- **类型安全**: 使用 TypeScript + Zod 进行验证
- **可扩展**: 支持自定义字段和插件
- **人性化**: 可读性强，易于理解

#### 1.2 DSL 结构

```yaml
# site-config.yaml

meta:
  name: "企业官网"
  type: "corporate"  # corporate | ecommerce | blog | portfolio | saas
  version: "1.0.0"

branding:
  companyName: "青牛商舟科技"
  logo: "./assets/logo.png"
  colors:
    primary: "#0070f3"
    secondary: "#ff4081"
  fonts:
    heading: "Inter"
    body: "system-ui"

layout:
  header:
    type: "sticky"  # sticky | static | transparent
    navigation:
      - { label: "首页", href: "/" }
      - { label: "产品", href: "/products" }
      - { label: "关于", href: "/about" }
      - { label: "联系", href: "/contact" }
    cta:
      text: "免费试用"
      href: "/signup"

sections:
  - type: "hero"
    variant: "fullscreen-video"
    content:
      headline: "AI 驱动的智能解决方案"
      subheadline: "让科技改变业务"
      cta:
        primary: { text: "立即开始", href: "/signup" }
        secondary: { text: "了解更多", href: "#features" }
      background:
        type: "video"
        src: "./assets/hero-video.mp4"

  - type: "features"
    variant: "grid-3col"
    title: "核心优势"
    items:
      - icon: "⚡"
        title: "极速性能"
        description: "毫秒级响应，极致体验"
      - icon: "🔒"
        title: "安全可靠"
        description: "银行级加密，数据无忧"
      - icon: "🎯"
        title: "精准智能"
        description: "AI 算法，智能决策"

  - type: "statistics"
    variant: "minimal"
    items:
      - { value: "10万+", label: "用户信赖" }
      - { value: "99.9%", label: "服务稳定" }
      - { value: "24/7", label: "全天候支持" }

  - type: "testimonials"
    variant: "carousel"
    title: "客户评价"
    items:
      - author: "张三"
        company: "某科技公司 CEO"
        avatar: "./assets/avatar1.jpg"
        content: "这个产品彻底改变了我们的工作方式"
        rating: 5

  - type: "cta"
    variant: "gradient"
    headline: "准备好开始了吗？"
    description: "立即注册，享受 30 天免费试用"
    button:
      text: "免费试用"
      href: "/signup"

  - type: "contact"
    variant: "form-with-map"
    title: "联系我们"
    form:
      fields:
        - { name: "name", type: "text", label: "姓名", required: true }
        - { name: "email", type: "email", label: "邮箱", required: true }
        - { name: "message", type: "textarea", label: "留言", required: true }
      submitText: "发送消息"
    contact:
      email: "contact@example.com"
      phone: "+86 138-0000-0000"
      address: "北京市朝阳区某某大厦 888 号"

footer:
  columns:
    - title: "产品"
      links:
        - { label: "功能", href: "/features" }
        - { label: "定价", href: "/pricing" }
        - { label: "案例", href: "/cases" }
    - title: "公司"
      links:
        - { label: "关于我们", href: "/about" }
        - { label: "博客", href: "/blog" }
        - { label: "招聘", href: "/careers" }
    - title: "支持"
      links:
        - { label: "帮助中心", href: "/help" }
        - { label: "API 文档", href: "/docs" }
        - { label: "联系我们", href: "/contact" }
  social:
    - { platform: "twitter", url: "https://twitter.com/..." }
    - { platform: "github", url: "https://github.com/..." }
    - { platform: "linkedin", url: "https://linkedin.com/..." }
  copyright: "© 2026 青牛商舟科技. All rights reserved."

seo:
  title: "青牛商舟科技 - AI 驱动的智能解决方案"
  description: "提供专业的 AI 技术解决方案"
  keywords: ["AI", "智能", "解决方案"]
  ogImage: "./assets/og-image.jpg"

features:
  i18n: true  # 国际化
  darkMode: true  # 深色模式
  analytics: "google"  # 分析工具
  chatbot: false  # 在线客服
  newsletter: true  # 邮件订阅

deployment:
  platform: "vercel"  # vercel | netlify | cloudflare
  domain: "example.com"
  env:
    - { key: "API_URL", value: "https://api.example.com" }
```

#### 1.3 TypeScript 类型定义

```typescript
// types/site-config.ts

import { z } from 'zod';

export const SiteConfigSchema = z.object({
  meta: z.object({
    name: z.string(),
    type: z.enum(['corporate', 'ecommerce', 'blog', 'portfolio', 'saas']),
    version: z.string(),
  }),
  branding: z.object({
    companyName: z.string(),
    logo: z.string().optional(),
    colors: z.object({
      primary: z.string(),
      secondary: z.string().optional(),
    }),
    fonts: z.object({
      heading: z.string(),
      body: z.string(),
    }).optional(),
  }),
  layout: z.object({
    header: z.object({
      type: z.enum(['sticky', 'static', 'transparent']),
      navigation: z.array(z.object({
        label: z.string(),
        href: z.string(),
      })),
      cta: z.object({
        text: z.string(),
        href: z.string(),
      }).optional(),
    }),
  }),
  sections: z.array(z.discriminatedUnion('type', [
    z.object({
      type: z.literal('hero'),
      variant: z.string(),
      content: z.any(),
    }),
    z.object({
      type: z.literal('features'),
      variant: z.string(),
      title: z.string().optional(),
      items: z.array(z.any()),
    }),
    // ... 其他 section 类型
  ])),
  footer: z.object({
    columns: z.array(z.any()).optional(),
    social: z.array(z.any()).optional(),
    copyright: z.string(),
  }),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).optional(),
    ogImage: z.string().optional(),
  }),
  features: z.object({
    i18n: z.boolean().optional(),
    darkMode: z.boolean().optional(),
    analytics: z.string().optional(),
    chatbot: z.boolean().optional(),
    newsletter: z.boolean().optional(),
  }).optional(),
  deployment: z.object({
    platform: z.enum(['vercel', 'netlify', 'cloudflare']),
    domain: z.string().optional(),
    env: z.array(z.object({
      key: z.string(),
      value: z.string(),
    })).optional(),
  }).optional(),
});

export type SiteConfig = z.infer<typeof SiteConfigSchema>;
```

---

### 2. Agent 执行引擎

#### 2.1 Agent 架构

```typescript
// agents/architecture.ts

/**
 * Agent 基类
 */
abstract class BaseAgent {
  abstract name: string;
  abstract description: string;
  
  abstract execute(context: AgentContext): Promise<AgentResult>;
  
  protected async callLLM(prompt: string): Promise<string> {
    // LLM 调用逻辑
  }
  
  protected async useSkill(skillName: string, params: any): Promise<any> {
    // Skills 调用逻辑
  }
}

/**
 * 规划 Agent - 负责需求分析和技术选型
 */
class PlannerAgent extends BaseAgent {
  name = 'PlannerAgent';
  description = '分析需求，生成技术方案';
  
  async execute(context: AgentContext): Promise<AgentResult> {
    // 1. 解析用户输入（自然语言/DSL/参考URL）
    const requirements = await this.parseRequirements(context.input);
    
    // 2. 分析网站类型和复杂度
    const siteType = await this.analyzeSiteType(requirements);
    
    // 3. 选择技术栈和模板
    const techStack = await this.selectTechStack(siteType);
    
    // 4. 生成 DSL 配置
    const config = await this.generateConfig(requirements, techStack);
    
    // 5. 制定执行计划
    const plan = await this.createExecutionPlan(config);
    
    return {
      config,
      plan,
      techStack,
    };
  }
}

/**
 * 执行 Agent - 负责调用 Skills 生成代码
 */
class ExecutorAgent extends BaseAgent {
  name = 'ExecutorAgent';
  description = '执行开发任务，生成代码';
  
  async execute(context: AgentContext): Promise<AgentResult> {
    const { config, plan } = context;
    
    // 1. 初始化项目
    await this.useSkill('init-project', {
      template: config.meta.type,
      name: config.meta.name,
    });
    
    // 2. 配置品牌信息
    await this.useSkill('setup-branding', config.branding);
    
    // 3. 生成页面结构
    await this.useSkill('generate-layout', config.layout);
    
    // 4. 生成各个 section
    for (const section of config.sections) {
      await this.useSkill(`generate-section-${section.type}`, section);
    }
    
    // 5. 配置 SEO
    await this.useSkill('setup-seo', config.seo);
    
    // 6. 启用功能特性
    if (config.features) {
      await this.useSkill('enable-features', config.features);
    }
    
    return {
      success: true,
      generatedFiles: [...],
    };
  }
}

/**
 * 优化 Agent - 负责代码优化和调整
 */
class OptimizerAgent extends BaseAgent {
  name = 'OptimizerAgent';
  description = '优化性能、样式和体验';
  
  async execute(context: AgentContext): Promise<AgentResult> {
    // 1. 性能优化
    await this.useSkill('optimize-performance', {
      images: true,
      fonts: true,
      codeSpitting: true,
    });
    
    // 2. 响应式适配
    await this.useSkill('ensure-responsive', {
      breakpoints: ['mobile', 'tablet', 'desktop'],
    });
    
    // 3. 无障碍优化
    await this.useSkill('improve-accessibility', {
      level: 'AA',
    });
    
    // 4. SEO 优化
    await this.useSkill('enhance-seo', {
      sitemap: true,
      robots: true,
      structuredData: true,
    });
    
    return {
      optimizations: [...],
    };
  }
}

/**
 * 测试 Agent - 负责质量检查
 */
class TesterAgent extends BaseAgent {
  name = 'TesterAgent';
  description = '执行测试和质量检查';
  
  async execute(context: AgentContext): Promise<AgentResult> {
    const results = {
      tests: [],
      issues: [],
    };
    
    // 1. 构建项目
    await this.useSkill('build-project', {});
    
    // 2. 运行测试
    results.tests.push(await this.useSkill('run-tests', {}));
    
    // 3. 性能检测
    results.tests.push(await this.useSkill('lighthouse-audit', {}));
    
    // 4. 浏览器预览
    await this.useSkill('browser-preview', {
      browsers: ['chrome', 'firefox', 'safari'],
    });
    
    // 5. 检查问题
    results.issues = await this.detectIssues(results.tests);
    
    return results;
  }
}

/**
 * Agent 协调器 - 统筹各个 Agent
 */
class AgentOrchestrator {
  private agents: Map<string, BaseAgent> = new Map();
  
  constructor() {
    this.agents.set('planner', new PlannerAgent());
    this.agents.set('executor', new ExecutorAgent());
    this.agents.set('optimizer', new OptimizerAgent());
    this.agents.set('tester', new TesterAgent());
  }
  
  async run(input: UserInput): Promise<WebsiteOutput> {
    const context: AgentContext = { input };
    
    // 1. 规划阶段
    const planResult = await this.agents.get('planner')!.execute(context);
    context.config = planResult.config;
    context.plan = planResult.plan;
    
    // 2. 执行阶段
    const execResult = await this.agents.get('executor')!.execute(context);
    context.generatedFiles = execResult.generatedFiles;
    
    // 3. 优化阶段
    const optimizeResult = await this.agents.get('optimizer')!.execute(context);
    
    // 4. 测试阶段
    const testResult = await this.agents.get('tester')!.execute(context);
    
    // 5. 如果有问题，让 executor 修复
    if (testResult.issues.length > 0) {
      await this.agents.get('executor')!.execute({
        ...context,
        fixes: testResult.issues,
      });
    }
    
    return {
      success: true,
      projectPath: '...',
      previewUrl: '...',
      deploymentUrl: '...',
    };
  }
}
```

---

### 3. Skills 技能库设计

#### 3.1 Skills 分类

```
skills/
├── base/                    # 基础技能
│   ├── init-project/        # 项目初始化
│   ├── install-deps/        # 安装依赖
│   ├── setup-config/        # 配置设置
│   └── git-operations/      # Git 操作
├── components/              # 组件生成技能
│   ├── generate-header/     # 生成导航头
│   ├── generate-hero/       # 生成首屏
│   ├── generate-features/   # 生成特性展示
│   ├── generate-testimonials/ # 生成客户评价
│   ├── generate-contact/    # 生成联系表单
│   └── generate-footer/     # 生成页脚
├── features/                # 功能特性技能
│   ├── enable-i18n/         # 国际化
│   ├── enable-dark-mode/    # 深色模式
│   ├── setup-analytics/     # 分析工具
│   ├── setup-seo/           # SEO 配置
│   └── add-animations/      # 动画效果
├── optimization/            # 优化技能
│   ├── optimize-images/     # 图片优化
│   ├── optimize-fonts/      # 字体优化
│   ├── code-splitting/      # 代码分割
│   └── lazy-loading/        # 懒加载
├── testing/                 # 测试技能
│   ├── unit-tests/          # 单元测试
│   ├── e2e-tests/           # 端到端测试
│   ├── lighthouse-audit/    # 性能审计
│   └── browser-preview/     # 浏览器预览
└── deployment/              # 部署技能
    ├── deploy-vercel/       # Vercel 部署
    ├── deploy-netlify/      # Netlify 部署
    └── setup-ci-cd/         # CI/CD 配置
```

#### 3.2 Skill 标准格式

每个 Skill 包含：

```
skill-name/
├── SKILL.md              # Skill 说明文档
├── prompt.md             # AI 提示词模板
├── templates/            # 代码模板
│   ├── component.tsx
│   ├── styles.css
│   └── config.ts
└── examples/             # 示例代码
    └── example.tsx
```

**SKILL.md 示例：**

```markdown
# Generate Hero Section

## 描述
生成网站首屏 Hero 区域，支持多种变体样式。

## 输入参数
- `variant`: 样式变体 (fullscreen | split | minimal | video)
- `content`: 内容配置
  - `headline`: 主标题
  - `subheadline`: 副标题
  - `cta`: 行动按钮配置
  - `background`: 背景配置

## 输出
- 生成 `components/Hero.tsx`
- 生成 `components/Hero.module.css`
- 更新首页引用

## 使用示例
\`\`\`typescript
await useSkill('generate-hero', {
  variant: 'fullscreen-video',
  content: {
    headline: 'AI 驱动的未来',
    subheadline: '让科技改变世界',
    cta: {
      primary: { text: '开始使用', href: '/signup' },
      secondary: { text: '了解更多', href: '#features' },
    },
    background: {
      type: 'video',
      src: '/hero-video.mp4',
    },
  },
});
\`\`\`

## 依赖
- framer-motion (动画)
- next/image (图片优化)

## 变体说明
- **fullscreen**: 全屏背景，居中内容
- **split**: 左右分栏布局
- **minimal**: 简约风格
- **video**: 视频背景
```

**prompt.md 示例：**

```markdown
你是一个前端组件生成专家。请根据以下配置生成一个 Hero 组件。

## 配置信息
{config}

## 要求
1. 使用 Next.js 13+ App Router
2. 使用 TypeScript 和 Tailwind CSS
3. 组件需要响应式设计
4. 支持深色模式
5. 使用 framer-motion 添加入场动画
6. 图片使用 next/image 优化
7. 遵循无障碍标准 (WCAG AA)

## 技术规范
- 使用 'use client' 标记客户端组件
- 类型定义放在单独的 types 文件
- 样式使用 Tailwind CSS utility classes
- 动画使用 framer-motion variants

## 代码结构
请生成以下文件：
1. components/Hero.tsx - 主组件
2. components/Hero.types.ts - 类型定义
3. 内联 Tailwind 样式

开始生成代码。
```

#### 3.3 Skill 执行引擎

```typescript
// skills/skill-engine.ts

interface Skill {
  name: string;
  description: string;
  execute: (params: any, context: SkillContext) => Promise<SkillResult>;
}

interface SkillContext {
  projectPath: string;
  config: SiteConfig;
  llm: LLMClient;
  fileSystem: FileSystemAPI;
}

interface SkillResult {
  success: boolean;
  generatedFiles?: string[];
  modifiedFiles?: string[];
  errors?: string[];
}

class SkillEngine {
  private skills: Map<string, Skill> = new Map();
  
  /**
   * 注册 Skill
   */
  registerSkill(skill: Skill) {
    this.skills.set(skill.name, skill);
  }
  
  /**
   * 加载所有 Skills
   */
  async loadSkills(skillsDir: string) {
    const skillDirs = await fs.readdir(skillsDir);
    
    for (const dir of skillDirs) {
      const skillPath = path.join(skillsDir, dir);
      const skill = await this.loadSkill(skillPath);
      this.registerSkill(skill);
    }
  }
  
  /**
   * 执行 Skill
   */
  async executeSkill(
    skillName: string,
    params: any,
    context: SkillContext
  ): Promise<SkillResult> {
    const skill = this.skills.get(skillName);
    
    if (!skill) {
      throw new Error(`Skill not found: ${skillName}`);
    }
    
    console.log(`执行 Skill: ${skillName}`);
    
    try {
      const result = await skill.execute(params, context);
      console.log(`✓ Skill 执行成功: ${skillName}`);
      return result;
    } catch (error) {
      console.error(`✗ Skill 执行失败: ${skillName}`, error);
      throw error;
    }
  }
  
  /**
   * 加载单个 Skill
   */
  private async loadSkill(skillPath: string): Promise<Skill> {
    const skillMd = await fs.readFile(path.join(skillPath, 'SKILL.md'), 'utf-8');
    const promptMd = await fs.readFile(path.join(skillPath, 'prompt.md'), 'utf-8');
    
    // 解析 Skill 元数据
    const metadata = this.parseSkillMetadata(skillMd);
    
    return {
      name: metadata.name,
      description: metadata.description,
      execute: async (params, context) => {
        // 1. 加载模板
        const templates = await this.loadTemplates(skillPath);
        
        // 2. 渲染 prompt
        const prompt = this.renderPrompt(promptMd, params, context);
        
        // 3. 调用 LLM 生成代码
        const generatedCode = await context.llm.generate(prompt);
        
        // 4. 解析生成的代码
        const files = this.parseGeneratedCode(generatedCode);
        
        // 5. 写入文件
        const generatedFiles = [];
        for (const file of files) {
          const filePath = path.join(context.projectPath, file.path);
          await context.fileSystem.writeFile(filePath, file.content);
          generatedFiles.push(filePath);
        }
        
        return {
          success: true,
          generatedFiles,
        };
      },
    };
  }
}
```

---

### 4. 模板系统

#### 4.1 模板结构

```
templates/
├── base/                    # 基础模板
│   ├── nextjs-app/          # Next.js App Router
│   ├── nextjs-pages/        # Next.js Pages Router
│   └── react-vite/          # React + Vite
├── types/                   # 按类型分类的模板
│   ├── corporate/           # 企业官网
│   ├── ecommerce/           # 电商网站
│   ├── blog/                # 博客网站
│   ├── portfolio/           # 作品集
│   └── saas/                # SaaS 产品
├── components/              # 组件库
│   ├── navigation/          # 导航组件
│   ├── hero/                # Hero 组件
│   ├── features/            # 特性展示
│   ├── testimonials/        # 客户评价
│   ├── pricing/             # 价格表
│   ├── contact/             # 联系表单
│   └── footer/              # 页脚
└── themes/                  # 主题
    ├── modern/              # 现代风格
    ├── minimal/             # 极简风格
    ├── bold/                # 大胆风格
    └── elegant/             # 优雅风格
```

#### 4.2 组件库规范

基于 **shadcn/ui** + **Tailwind CSS** + **Framer Motion**

```typescript
// components/ui/button.tsx

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

### 5. 质量保障系统

#### 5.1 自动化测试

```typescript
// tests/setup.ts

import { test, expect } from '@playwright/test';

/**
 * 测试套件：基础功能
 */
test.describe('基础功能测试', () => {
  test('页面正常加载', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/青牛商舟/);
  });
  
  test('导航正常工作', async ({ page }) => {
    await page.goto('/');
    await page.click('text=产品');
    await expect(page).toHaveURL(/\/products/);
  });
  
  test('表单提交正常', async ({ page }) => {
    await page.goto('/contact');
    await page.fill('input[name="name"]', '测试用户');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', '这是测试消息');
    await page.click('button[type="submit"]');
    await expect(page.locator('.success-message')).toBeVisible();
  });
});

/**
 * 测试套件：响应式设计
 */
test.describe('响应式测试', () => {
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 },
  ];
  
  for (const viewport of viewports) {
    test(`${viewport.name} 视口正常显示`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
    });
  }
});

/**
 * 测试套件：无障碍性
 */
test.describe('无障碍性测试', () => {
  test('通过 axe 审计', async ({ page }) => {
    await page.goto('/');
    const accessibilityScanResults = await new AxeBuilder({ page })
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('键盘导航正常', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();
  });
});
```

#### 5.2 性能监控

```typescript
// tests/performance.ts

import { test, expect } from '@playwright/test';

test('Lighthouse 性能审计', async ({ page }) => {
  await page.goto('/');
  
  // 运行 Lighthouse
  const lighthouse = await runLighthouse(page.url());
  
  // 性能指标断言
  expect(lighthouse.categories.performance.score).toBeGreaterThan(0.9);
  expect(lighthouse.categories.accessibility.score).toBeGreaterThan(0.9);
  expect(lighthouse.categories['best-practices'].score).toBeGreaterThan(0.9);
  expect(lighthouse.categories.seo.score).toBeGreaterThan(0.9);
  
  // Core Web Vitals
  expect(lighthouse.audits['first-contentful-paint'].numericValue).toBeLessThan(1500);
  expect(lighthouse.audits['largest-contentful-paint'].numericValue).toBeLessThan(2500);
  expect(lighthouse.audits['cumulative-layout-shift'].numericValue).toBeLessThan(0.1);
});
```

---

## 🔧 技术栈选型

### 前端框架
- **Next.js 14+** (App Router)
  - 服务端渲染 (SSR)
  - 静态生成 (SSG)
  - 图片优化
  - 性能优化

### UI 框架
- **Tailwind CSS** - 原子化 CSS
- **shadcn/ui** - 高质量组件库
- **Framer Motion** - 动画库
- **Radix UI** - 无障碍组件原语

### 开发工具
- **TypeScript** - 类型安全
- **ESLint + Prettier** - 代码规范
- **Husky + lint-staged** - Git hooks

### AI 相关
- **LangChain** / **LangGraph** - Agent 框架
- **Zod** - 数据验证
- **OpenAI API** / **Claude API** - LLM 服务

### 测试工具
- **Playwright** - E2E 测试
- **Jest** - 单元测试
- **Lighthouse CI** - 性能测试

### 部署平台
- **Vercel** (推荐)
- **Netlify**
- **Cloudflare Pages**

---

## 📦 项目结构

```
ai-website-generator/
├── packages/
│   ├── core/                    # 核心引擎
│   │   ├── src/
│   │   │   ├── agents/          # Agent 实现
│   │   │   ├── skills/          # Skill 引擎
│   │   │   ├── dsl/             # DSL 解析器
│   │   │   └── orchestrator.ts  # 协调器
│   │   └── package.json
│   │
│   ├── cli/                     # 命令行工具
│   │   ├── src/
│   │   │   ├── commands/        # CLI 命令
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   ├── web/                     # Web 界面（可选）
│   │   ├── src/
│   │   │   ├── app/             # Next.js 应用
│   │   │   └── components/
│   │   └── package.json
│   │
│   └── templates/               # 模板库
│       ├── base/
│       ├── types/
│       └── components/
│
├── skills/                      # Skills 库
│   ├── base/
│   ├── components/
│   ├── features/
│   ├── optimization/
│   ├── testing/
│   └── deployment/
│
├── examples/                    # 示例配置
│   ├── corporate-site.yaml
│   ├── ecommerce-site.yaml
│   └── saas-product.yaml
│
├── docs/                        # 文档
│   ├── getting-started.md
│   ├── dsl-reference.md
│   ├── skills-guide.md
│   └── api-reference.md
│
├── tests/                       # 集成测试
│   ├── e2e/
│   └── integration/
│
├── .github/
│   └── workflows/               # CI/CD
│
├── package.json
├── tsconfig.json
├── turbo.json                   # Turborepo 配置
└── README.md
```

---

## 🚀 实施路线图

### Phase 1: MVP (4-6 周)

#### Week 1-2: 基础架构
- [ ] 搭建 Monorepo 项目结构 (Turborepo)
- [ ] 实现 DSL 解析器和类型定义
- [ ] 开发 PlannerAgent 基础功能
- [ ] 开发 ExecutorAgent 基础功能

#### Week 3-4: 核心 Skills
- [ ] 实现 5 个基础 Skills (init-project, setup-branding, 等)
- [ ] 实现 5 个组件 Skills (hero, features, contact, 等)
- [ ] 创建 1-2 个基础模板
- [ ] 开发 CLI 工具

#### Week 5-6: 测试和优化
- [ ] 实现 TesterAgent
- [ ] 集成 Playwright 测试
- [ ] 完成 3-5 个示例网站
- [ ] 编写文档

**MVP 目标输出：**
- 支持生成 1-2 种类型的网站（企业官网、个人作品集）
- 包含 10-15 个核心 Skills
- CLI 工具可以从 YAML 配置生成完整网站
- 通过基础测试

---

### Phase 2: 功能扩展 (4-6 周)

#### Week 7-8: 更多网站类型
- [ ] 添加电商网站模板和 Skills
- [ ] 添加博客网站模板和 Skills
- [ ] 添加 SaaS 产品网站模板和 Skills

#### Week 9-10: 高级功能
- [ ] 实现 OptimizerAgent
- [ ] 添加国际化支持
- [ ] 添加深色模式支持
- [ ] 添加分析工具集成

#### Week 11-12: 部署和 CI/CD
- [ ] 实现部署 Skills (Vercel, Netlify)
- [ ] 添加 CI/CD 配置生成
- [ ] 性能优化和监控

**Phase 2 目标输出：**
- 支持 5 种网站类型
- 30+ Skills
- 完整的优化和部署流程
- 高级功能支持

---

### Phase 3: 平台化 (6-8 周)

#### Week 13-15: Web 界面
- [ ] 开发可视化配置界面
- [ ] 实现在线预览功能
- [ ] 添加拖拽式页面编辑

#### Week 16-18: 智能化提升
- [ ] 支持从参考网站 URL 生成配置
- [ ] 支持从设计稿截图生成代码
- [ ] 优化 Agent 决策能力

#### Week 19-20: 社区和市场
- [ ] 建立 Skills 市场
- [ ] 支持自定义 Skills 上传
- [ ] 添加模板市场

**Phase 3 目标输出：**
- 完整的 Web 平台
- 智能化配置生成
- 社区生态系统

---

## 💡 使用示例

### CLI 使用

```bash
# 安装
npm install -g @ai-web-gen/cli

# 从配置文件生成网站
ai-web-gen create ./site-config.yaml

# 从自然语言生成网站
ai-web-gen create --prompt "创建一个现代风格的科技公司官网，包含首页、产品、关于我们和联系页面"

# 从参考网站生成
ai-web-gen create --from-url https://example.com

# 预览网站
ai-web-gen preview

# 部署网站
ai-web-gen deploy --platform vercel
```

### API 使用

```typescript
import { WebsiteGenerator } from '@ai-web-gen/core';

const generator = new WebsiteGenerator({
  apiKey: process.env.OPENAI_API_KEY,
});

// 从配置生成
const result = await generator.generate({
  config: siteConfig,
  outputPath: './output/my-website',
});

// 从自然语言生成
const result = await generator.generateFromPrompt({
  prompt: '创建一个电商网站',
  outputPath: './output/ecommerce-site',
});

// 预览
await generator.preview(result.projectPath);

// 部署
await generator.deploy(result.projectPath, {
  platform: 'vercel',
  domain: 'example.com',
});
```

---

## 📊 性能指标

### 生成速度
- 简单网站 (5 个页面): 2-3 分钟
- 中等复杂度 (10 个页面): 5-8 分钟
- 复杂网站 (20+ 页面): 10-15 分钟

### 质量指标
- Lighthouse 性能分数: > 90
- 无障碍性分数: > 90
- SEO 分数: > 90
- 代码测试覆盖率: > 80%

### 成本估算
- 每个网站 LLM 成本: $0.50 - $2.00
- 每月支持 1000 个网站生成

---

## 🔒 安全性考虑

1. **代码审查**: 所有生成的代码都需要经过安全扫描
2. **依赖安全**: 自动检查依赖包漏洞
3. **环境隔离**: 生成过程在隔离环境中执行
4. **输入验证**: 严格验证所有配置输入
5. **敏感信息**: 不在生成的代码中包含 API 密钥等敏感信息

---

## 📈 可扩展性

### Skills 插件系统
- 支持第三方开发 Skills
- Skills 市场和版本管理
- 社区贡献机制

### 模板生态
- 模板市场
- 付费和免费模板
- 模板评分和评论系统

### Agent 扩展
- 支持自定义 Agent
- Agent 链路编排
- 多 Agent 协作

---

## 🎯 成功标准

### MVP 阶段
- [x] 能够生成 2 种类型的网站
- [x] 生成的网站可以正常运行
- [x] Lighthouse 分数 > 80
- [x] 有完整的使用文档

### 产品化阶段
- [ ] 支持 5+ 种网站类型
- [ ] 月活用户 > 1000
- [ ] 用户满意度 > 85%
- [ ] 平均生成时间 < 5 分钟

### 平台化阶段
- [ ] 月生成网站数 > 10000
- [ ] Skills 市场有 > 100 个 Skills
- [ ] 付费用户转化率 > 5%
- [ ] 社区贡献者 > 50 人

---

## 📚 相关资源

### 参考项目
- [v0.dev](https://v0.dev) - Vercel 的 AI UI 生成器
- [Builder.io](https://builder.io) - 可视化网站构建器
- [Webflow](https://webflow.com) - 无代码网站构建
- [Framer](https://framer.com) - 设计和原型工具

### 技术文档
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [LangChain](https://js.langchain.com/docs)

---

## 🤝 团队分工建议

### 核心团队 (5-7 人)

1. **架构师 x 1**
   - 系统架构设计
   - 技术选型
   - 性能优化

2. **Agent 开发 x 2**
   - Agent 逻辑实现
   - LLM 集成
   - 决策算法

3. **Skills 开发 x 2**
   - Skills 开发和维护
   - 模板创建
   - 组件库开发

4. **前端开发 x 1**
   - CLI 工具
   - Web 界面
   - 文档网站

5. **测试工程师 x 1**
   - 自动化测试
   - 质量保障
   - 性能测试

---

## 📝 下一步行动

### 立即开始
1. [ ] 确认技术方案
2. [ ] 搭建项目骨架
3. [ ] 定义 DSL 规范
4. [ ] 实现第一个 Agent
5. [ ] 开发第一个 Skill

### 本周目标
- [ ] 完成项目初始化
- [ ] 实现 DSL 解析器
- [ ] 开发 2-3 个基础 Skills
- [ ] 生成第一个演示网站

---

## 🎉 总结

这套 **DSL 驱动 + Agent 执行 + Skills** 的架构方案具有以下优势：

1. **标准化**: 统一的配置格式和开发流程
2. **智能化**: AI Agent 自动决策和优化
3. **模块化**: Skills 可复用，易扩展
4. **高质量**: 自动化测试和优化保证质量
5. **可扩展**: 插件化架构，社区驱动

通过分阶段实施，我们可以快速验证 MVP，然后逐步扩展功能，最终打造一个强大的 AI 网站生成平台。

---

**文档版本**: v1.0.0  
**最后更新**: 2026-02-05  
**负责人**: [待定]  
**状态**: 待评审
