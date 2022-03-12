import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/configuration.md',
        '/guide/page.md',
        '/guide/markdown.md',
        '/guide/assets.md',
        '/guide/i18n.md',
        '/guide/deployment.md',
        '/guide/theme.md',
        '/guide/plugin.md',
        '/guide/bundler.md',
        '/guide/migration.md',
      ],
    },
  ],
  '/yunling/': [
    {
      text: '产品介绍',
      collapsible: false,
      children: [
        '/yunling/product/introduce.md',
      ]
    },
    {
      text: '快速接入',
      collapsible: true,
      children: [
        '/yunling/guide/getting-started.md',
      ]
    },
    {
      text: '技术手册',
      collapsible: true,
      children: [
        {
          text: 'Data-SDK',
          children: [
            {
              text: 'Andorid',
              link: '/yunling/manual/sdk/data/android.md'
            },
            {
              text: 'iOS',
              link: '/yunling/manual/sdk/data/ios.md'
            }
          ]
        },
        {
          text: 'UI-SDK',
          children: [
            {
              text: 'Andorid',
              link: '/yunling/manual/sdk/ui/android.md'
            },
            {
              text: 'iOS',
              link: '/yunling/manual/sdk/ui/ios.md'
            }
          ]
        },
        {
          text: 'Player-SDK',
          children: [
            {
              text: 'Andorid',
              link: '/yunling/manual/sdk/player/android.md'
            },
            {
              text: 'iOS',
              link: '/yunling/manual/sdk/player/ios.md'
            }
          ]
        }
      ]
    },
  ],
}
