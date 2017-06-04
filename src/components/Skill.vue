<template>
  <div id="skill">
    <h1>擅长技能</h1>
    <div class="tag-panel">
      <div class="tag expert">CSS</div>
      <div class="tag familiar">SCSS</div>
    </div>
    <div class="tag-panel">
      <div class="tag expert">JavaScript</div>
      <div class="tag expert">jQuery</div>
      <div class="tag expert">AJAX</div>
      <div class="tag expert">Vue</div>
      <div class="tag familiar">Bootstrap</div>
      <div class="tag familiar">C#</div>
    </div>
    <div class="tag-panel">
      <div class="tag expert">HTML5</div>
      <div class="tag expert">CSS3</div>
      <div class="tag expert">MVC</div>
      <div class="tag familiar">HighCharts</div>
    </div>
    <div class="tag-panel">
      <div class="tag expert">微信小程序</div>
      <div class="tag expert">图像处理</div>
      <div class="tag familiar">网页设计</div>
    </div>
    <div class="tag-panel">
      <div class="tag expert">PhotoShop</div>
      <div class="tag expert">Webstorm</div>
      <div class="tag familiar">NPM</div>
      <div class="tag familiar">Webpack</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'skill',
    data () {
      return {
        skills:[
          {}
        ]
      }
    }
  }
</script>

<style>
  #skill{text-align: center}
  .tag-panel{margin: 15px auto}
  .tag{background-color: #096254;color: #aee2d9;border-radius: 3px;display: inline-block;padding: 2px 8px;margin-right: 3px;margin-bottom: 3px;opacity: 0.5;}
  .tag.expert{opacity: 1.0}
  .tag.familiar{opacity: 0.75}
</style>
