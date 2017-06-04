<template>
  <div id="education">
    <h1>教育背景</h1>
    <h4 class="edu-school">{{school}}</h4>
    <h4 class="edu-grade">{{grade}}</h4>
    <p class="edu-class">{{cla}}</p>
    <p class="edu-time">{{time}}</p>
  </div>
</template>

<script>
  export default {
    name: 'education',
    data () {
      return {
        school:'苏州大学文正学院',
        grade:'本科',
        cla:'测控专业',
        time:'2016年6月毕业'
      }
    }
  }
</script>

<style>
  #education{text-align: center}
  .edu-school{font-family: Lato,"Microsoft YaHei",sans-serif;font-weight: 400}
  .edu-grade{font-size: 26px;color: #008a75}
  .edu-class{font-size: 20px;color: #aee2d9!important;}
  .edu-time{font-size: 24px;font-weight: 400}
</style>
