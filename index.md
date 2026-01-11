---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/img/profile.png',
    name: 'Duoxiang Zhao'
  }
]
</script>

<VPTeamPage>
  <VPTeamMembers :members />
  <VPTeamPageTitle>
    <template #title>
      Duoxiang Zhao
    </template>
    <template #lead>
      Junior undergraduate student majoring in Computer Science at Pittsburgh Institute, Sichuan University. Interested in deep learning and its applications.
      <br>
      <br>
      Email me at <a href="mailto:zhaoduoxiang@stu.scu.edu.cn" target="_blank" rel="noopener"><u>zhaoduoxiang@stu.scu.edu.cn</u></a>
      <br><br>
      Github: <a href="https://github.com/acceleratez" target="_blank" rel="noopener"><u>Click here</u></a>
      <br><br>
      Google Scholar: <a href="https://scholar.google.com/citations?user=2C7jbyIAAAAJ" target="_blank" rel="noopener"><u>Click here</u></a>
      <br><br>
      <a href="/about-me/"><u>Click here</u></a> for more details about me.
      <br><br>
    </template>
  </VPTeamPageTitle>

</VPTeamPage>
