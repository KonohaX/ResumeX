<template>
  <div id="work">
    <h1>工作经验</h1>
     <div class="time-line">
        <ol class="clearfix">
            <li v-for="(company, index) in companies">
              <a v-on:click="show">{{company.time}}</a>
              <div class="time-content col-xs-5 col-sm-4 col-md-4">
                <p>{{company.name}}</p>
                <p>{{company.job}}</p>
                <p v-for="(content, index) in company.contents">{{content.p}}</p>
              </div>
            </li>
        </ol>
    </div>
  </div>
</template>

<script>

export default {
  name: 'work',
  data () {
    return {
      title:'工作经验',
      companies:[
        {
          name:'江苏普信达电子科技有限公司',
          time:'2016.3-2017.3',
          job:'任职：前端开发',
          contents:[
            {p:'工作内容：'},
            {p:'页面代码重构以及代码优化'},
            {p:'和后台利用ajax进行交互'},
            {p:'协助开发微信公众号及小程序'},
            {p:'公共组件及模版的编写'},
            {p:'多项数据报表及地图制作(Highcharts、百度地图、高德地图)'},
            {p:'时刻关注新技术的发展，选择需要的框架来高效的完成工作'}
         ]
        },
        {
          name:'正在寻找一份前端开发的工作',
          time:'2017.4-Now',
          job:'',
          content:''
        }
      ]
    }
  },
  methods: {
    show() {
      $(".time-content").hide()
    }
  }
}
</script>

<style>
  #work{height:600px}
  .time-line{width: auto;position: relative;margin:50px 200px 0;height:2px;background-color: #eee;}
  .time-line ol{width: auto;-webkit-padding-start:0}
  .time-line li{width: 50%;height:1px;display: inline-block;float: left;background-color: #fff;overflow: visible;}
  .time-line li a{position: absolute;bottom: 0;z-index: 2;text-align: center;padding-bottom: 15px;color: #EDEDED;font-size:16px; -webkit-transform: translateZ(0);-moz-transform: translateZ(0);-ms-transform: translateZ(0);-o-transform: translateZ(0);transform: translateZ(0);}
  .time-line li a:after{position: absolute;content: '';transform: translateX(-50%);bottom: -4px;left:50%;height: 12px;width: 12px;background-color: #7b9d6f;border-radius: 50%;border: 2px solid #eee;}
  .time-line li div{position: absolute;top:30px;max-height: 400px;background-color: #C1FFC1;border-radius: 5px;font-weight:bold;padding: 10px;word-wrap:break-word;word-break:break-all;overflow: hidden }
  p{color:#008a75!important;}
  .clearfix{overflow:auto;zoom: 1}
</style>
