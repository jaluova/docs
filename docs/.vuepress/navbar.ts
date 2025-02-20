import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'material-symbols:home' },
  { text: '博客', link: '/blog/', icon: 'material-symbols:menu-book' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    icon: 'lucide:file-pen-line',
    items: [
      { text: '安全', link: '/notes/安全/README.md', icon: 'fluent:mail-shield-16-filled' },
      { text: '算法', link: '/notes/算法/README.md', icon: 'hugeicons:algorithm' },
      { text: '数据结构', link: '/notes/数据结构/README.md', icon: 'healthicons:database' },
      // { text: '嵌入式', link: '/notes/嵌入式/README.md' },
      // { text: '示例', link: '/notes/demo/README.md' },
    ]
  },
])