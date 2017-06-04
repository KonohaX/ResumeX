<template>
  <div id="contact">
    <h1>联系方式</h1>
    <h3 class="colo">邮箱：<a  v-bind:href =href >{{email}}</a></h3>
    <h3 class="colo">手机号码：{{phone}}</h3>
    <h3>{{message}}</h3>

  </div>
</template>

<script>
  export default {
    name: 'education',
    data () {
      return {
        href:'mailto:550192389@qq.com',
        email:'550192389@qq.com',
        phone:'13656221847',
        message:'感谢您花时间阅读我的简历，期待能有机会和您共事。'
      }
    }
  }
</script>

<style>
  #contact{text-align: center}
  .colo{color: #008a75;font-size: 22px}
</style>
