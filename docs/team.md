---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://blog-dogecdn.lynn6.cn/pic/fb2c42d74892b1e208c0be7af2be20b31627004540489.jpeg',
    name: 'Venti_Lynn',
    title: '开发者,作者',
    links: [
    ],
  },
  {
    avatar: 'https://jsd.cdn.zzko.cn/gh/LynnGuo666/Blog-CDN@master//20240506224757.png',
    name: 'OlivaFute',
    title: '游戏设计',
    links: [
    ],
  },
    {
    avatar: 'https://jsd.cdn.zzko.cn/gh/LynnGuo666/Blog-CDN@master//dd4985b4b9657ee847171283c2b683f9.jpeg',
    name: 'Ov3rskyZz',
    title: '宣传片作者',
    links: [
    ],
  }    
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      制作团队
    </template>
    <template #lead>
大逃杀游戏的设计与开发团队
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>