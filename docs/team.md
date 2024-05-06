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
    avatar: 'https://www.github.com/RainC7.png',
    name: 'Venti_Lynn',
    title: '开发者',
    links: [
      { icon: 'github', link: 'https://github.com/RainC7' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
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
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>