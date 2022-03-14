import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const zh: NavbarConfig = [
  // {
  //   text: '指南',
  //   link: '/guide/',
  // },
  {
    text: '产品',
    children: [
      {
        text: '云岭',
        link: '/yunling/product/introduce',
      },
    ]
  },
  {
    text: '官网',
    link: 'https://www.yilan.tv',
  },
  {
    text: '控制台',
    link: 'https://console.vaas.cn',
  },

]
