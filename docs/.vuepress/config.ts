import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/docs/',
  lang: 'zh-CN',
  title: 'unf01d',
  description: 'My blog',

  head: [
    ['link', { rel: 'icon', href: 'logos--growth-book-icon.svg' }],
    // ['script', {src: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js"}],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',

    /* 文档仓库配置，用于 editLink */
    docsRepo: 'jaluova/docs',
    docsDir: 'docs',
    docsBranch: 'main',

    /* 页内信息 */
    // editLink: true,
    lastUpdated: false,
    contributors: false,
    // contributors: {
    //   mode: 'block',
    //   info: [
    //     {
    //       username: 'jaluova', // github username
    //       alias: ['jaluova'],
    //       url: 'https://github.com/jaluova',
    //       avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1849367556&spec=640&img_type=jpg',
    //     }
    //   ]
    // },
    changelog: false,

    /**
     * 博客
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用博客
    // blog: {
    //   postList: true, // 是否启用文章列表页
    //   tags: true, // 是否启用标签页
    //   archives: true, // 是否启用归档页
    //   categories: true, // 是否启用分类页
    //   postCover: 'right', // 文章封面位置
    //   pagination: 15, // 每页显示文章数量
    // },

    /* 博客文章页面链接前缀 */
    article: '/article/',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // },

    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ['shell', 'bash', 'typescript', 'javascript', 'c', 'c++', 'c#', 'python', 'html', 'php'],
        twoslash: false, // 启用 twoslash
        whitespace: false, // 启用 空格/Tab 高亮
        lineNumbers: true, // 启用行号
      },

      /* 本地搜索, 默认启用 */
      // search: true,

      /**
       * Algolia DocSearch
       * 启用此搜索需要将 本地搜索 search 设置为 false
       * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
       */
      // docsearch: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      // },

      /* 文章字数统计、阅读时间，设置为 false 则禁用 */
      // readingTime: true,

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        chartjs: true,
        // echarts: true,
        // mermaid: true,
        // flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
        //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
        //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
        bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
        //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
        //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
        //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
        //   icons: true,        // 启用内置图标语法  :[icon-name]:
        //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
        //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
        //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
        //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
        //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
        //   demo: true,         // 启用 demo 容器  ::: demo
        //   repl: {             // 启用 代码演示容器
        //     go: true,         // ::: go-repl
        //     rust: true,       // ::: rust-repl
        //     kotlin: true,     // ::: kotlin-repl
        //   },
        //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
      },

      /**
       * 在 Markdown 文件中导入其他 markdown 文件内容。
       * @see https://theme-plume.vuejs.press/guide/markdown/include/
       */
      // markdownInclude: true,

      /**
       * Markdown 数学公式
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
       */
      // markdownMath: {
      //   type: 'katex',
      // },

      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      // watermark: true,

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: 'jaluova/docs',
        repoId: 'R_kgDONsYtzQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDONsYtzc4CmJ18',
        mapping: 'pathname',
        reactionsEnabled: true,
        inputPosition: 'top',
      },
    },

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    encrypt: {},



  }),
})