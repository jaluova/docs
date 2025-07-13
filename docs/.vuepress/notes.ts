import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const ACMNote = defineNoteConfig({
  dir: '算法',
  link: '/algorithm',
  sidebar: [
    '',
    {
      text: '算法',
      collapsed: false,
      icon: 'ph:graph',
      items: 'auto',
    },
  ]
})

const CTFNote = defineNoteConfig({
  dir: '安全',
  link: '/security',
  sidebar: [
    '',
    {
      text: '安全',
      collapsed: false,
      icon: 'ph:graph',
      items: 'auto',
    }
  ]
})

const DataNote = defineNoteConfig({
  dir: '数据结构',
  link: '/data-struct',
  sidebar: [
    '',
    {
      text: '数据结构',
      collapsed: false,
      icon: 'ph:graph',
      items: 'auto',
    }
  ]
})

const LanguageNote = defineNoteConfig({
  dir: '语言',
  link: '/language',
  sidebar: [
    '',
    {
      text: '语言',
      collapsed: false,
      icon: 'ph:graph',
      items: 'auto',
    }
  ]
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote, ACMNote, CTFNote, DataNote, LanguageNote],
})