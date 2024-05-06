import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "大逃杀！",
  description: "EasyTalk",
  themeConfig: {
    logo: '/logo.png',
    //本地搜索
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'RIA 论坛', link: 'https://bbs.ria.red' }
    ],

    sidebar: {
      '/play/': [
        {
          text: '快速开始',
          items: [
            { text: '游戏介绍', link: '/play/' },
            { text: '宣传片', link: 'https://www.bilibili.com/video/BV1NZ421H7oV/' }
          ]
        },
        {
          text: '制作组通讯',
          items: [
            { text: '第1期', link: '/play/roadmap/1' }
          ]
        }
      ],

      '/wiki/': [
        {
          text: '游戏Wiki',
          collapsed: true,
          items: [
            { text: 'NPC们', link: '/wiki/npc' },
            { text: '游戏道具', link: '/wiki/prop' },
          ]
        },
        {
          text: '游戏任务',
          collapsed: true,
          items: [
            { text: '神秘的祭坛', link: '/wiki/tasks/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: { svg: '<svg t="1715004459479" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2723" width="200" height="200"><path d="M383.2 607.072a24.576 24.576 0 1 0 24.576 24.576 24.576 24.576 0 0 0-24.576-24.576z m228.448 70.848a24.576 24.576 0 1 0 0 49.12 24.576 24.576 0 0 0 0-49.12z" p-id="2724"></path><path d="M966.72 738.912c-8.064 4.032-19.616 4.224-30.272 0.544-7.2-2.528-14.976-4.928-22.72-7.328-14.368-4.384-38.4-11.712-42.944-17.248a22.656 22.656 0 1 0-36.224 27.296c2.496 3.392 5.888 6.176 9.312 8.864-34.656 47.968-186.88 143.456-402.112 96.416-96.992-21.216-162.272-59.936-188.832-111.936-19.136-37.568-14.784-76.256-5.632-97.28 26.336-54.72 216.544-180.768 337.984-252.128a22.72 22.72 0 0 0 8.032-31.072c-6.368-10.784-20.832-15.104-31.04-8.032-9.792 5.76-43.104 25.536-85.6 52.448-14.368-9.664-39.2-21.568-79.008-25.472-63.136-6.272-209.024-34.112-256.16-54.048-33.76-14.272-110.4-52.096-93.408-94.656 3.936-9.92 22.4-25.984 62.464-41.28a357.184 357.184 0 0 1 84.768-20.864l-8.992 4.352c-27.296 13.248-57.056 28.064-77.056 45.6-1.44-0.928-2.976-1.888-4-2.912a22.4 22.4 0 0 0-32.032-0.736 22.624 22.624 0 0 0-0.736 32.064c8.064 8.48 20.032 14.848 35.232 19.712 0.576 0.192 1.088 0.448 1.664 0.576 52.896 16.288 146.912 14.24 279.456 8.992 57.152-2.24 111.104-4.352 156.128-3.488 149.216 2.976 261.376 62.304 342.88 181.472 50.08 73.216 32 145.344 3.36 208a60.896 60.896 0 0 1-9.824-9.44 22.976 22.976 0 0 0-31.84-3.616 22.688 22.688 0 0 0-3.616 31.872c4.608 5.824 28.256 32.992 57.568 30.688 0.544 0.032 1.024-0.032 1.568-0.064 0.864-0.128 1.792 0.032 2.72-0.128 20.032-3.648 32.608-2.688 44.384 4.672 15.584 9.824 23.264 15.712 21.728 20.608-0.896 3.072-3.232 5.28-7.136 7.488zM348 486.176L334.624 496a67.2 67.2 0 0 1-10.336-13.6c5.28-1.568 14.048 0.288 23.712 3.776z m625.984 184.8a79.104 79.104 0 0 0-34.432-11.456c26.88-65.504 43.968-151.232-14.24-236.384-89.056-130.304-216.768-197.984-379.456-201.248-46.336-0.896-100.992 1.248-158.784 3.552-67.136 2.656-156.448 6.144-217.184 1.12 12.096-6.56 24.992-12.864 36.16-18.272 42.72-20.768 76.352-36.96 65.216-65.664-5.824-16.768-23.232-25.568-51.808-26.208-60.16-1.376-190.208 33.44-213.568 92.096-13.152 33.024-15.328 96.8 117.92 153.152 54.816 23.232 209.632 51.552 269.376 57.472 16.896 1.632 29.792 5.056 39.616 8.672a2839.468 2839.468 0 0 0-41.888 28.16c-24.544-13.984-64.64-30.464-94.592-10.048-11.584 7.84-18.176 19.392-18.496 32.544-0.416 16.352 9.504 32.352 20.672 45.248-44.096 35.168-79.776 69.28-92.416 95.552-14.112 32.32-19.84 85.184 6.464 136.768 33.408 65.472 107.232 111.104 219.552 135.68 146.752 32.032 273.504 3.168 357.376-40.96 46.688-24.576 79.808-53.888 95.904-80.032l15.136 4.768c7.168 2.176 14.336 4.352 21.056 6.752 22.208 7.68 46.784 6.656 65.664-2.88l1.056-0.544c14.24-7.488 24.512-19.552 29.024-34.048 12.096-39.136-22.432-60.768-43.264-73.824z" p-id="2725"></path></svg>' }, link: 'https://afdian.net/a/lynnguo666' }
    ]
  }
})
