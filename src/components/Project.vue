<template>
  <div id="project">
    <h1>项目经验</h1>
    <template v-for="item in items">
      <div class="row">
        <template v-for="li in item.con">
          <div class="col-2 center"><a class="circle-img"  v-bind:href = "li.href"><img v-bind:src = "li.src" /></a></div>
          <div class="col-4">
            <h2>
              <a v-bind:href = "li.href">{{li.title}}</a>
            </h2>
            <div>
            简介：<p class="textIndent">{{li.content}}</p>
            基于：<p class="textIndent">{{li.developLanguage}}</p>
            </div>        
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'project',
    data () {
      return {
        items:[
          {
            con:[
              {src:require('../assets/xcx.png'),title:'链上单车微信小程序',href:'javascript:void(0)',content:'利用了WXML+CSS+JS配合使用微信小程序API，开发出带注册、登陆、支付、扫码和地图等功能的租车小程序(前端部分).',developLanguage:'wxml,wxss'},
              {src:require('../assets/gzh.png'),title:'移动城堡微信公众号',href:'javascript:void(0)',content:'配合微信公众平台开发者文档，在MVC框架下搭建的一个租车服务公众号(负责移动端页面制作、数据对接以及后端接口编写).',developLanguage:'jquery,weui,flex'},
            ]
          },
          {
            con:[
              {src:require('../assets/pt.png'),title:'交运通WebApp',href:'javascript:void(0)',content:'苏州相城区交通局内部使用的具有多项功能，如事件处理，局长督办，车辆轨迹，备忘录等多功能的功能性APP。(负责页面制作及数据对接).',developLanguage:'ionic2,typeScirpt'},
              {src:require('../assets/wz.png'),href:'http://www.posinda.com/',title:'普信达宣传网站',content:'公司对外展示与宣传网站(负责完成代码按需重构及交互制作).',developLanguage:'jquery,highcharts,bootstrap'},
            ]
          }
        ]
      }
    }
  }
</script>

<style>
  .row div{display: inline-block;}
  .circle-img {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #008a75;
    padding: 18px;
  }
  .col-4 h2 > a{
    color:#CAFF70;
  }
</style>
