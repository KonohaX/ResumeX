<template>
  <div id="project">
    <h1>项目经验</h1>
    <template v-for="item in items">
      <div class="row">
        <template v-for="li in item.con">
          <div class="col-2 center"><a class="circle-img"  v-bind:href = li.href><img v-bind:src = li.src /></a></div>
          <div class="col-4">
            <h2>
              <a v-bind:href = li.href>{{li.title}}</a>
            </h2>
            <p>{{li.content}}</p>
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
              {src:require('../assets/xcx.png'),title:'链上单车微信小程序',href:'javascript:void(0)',content:'利用了WXML+CSS+JS配合使用微信小程序API，开发出带注册、登陆、支付、扫码和地图等功能的租车小程序(前端部分)'},
              {src:require('../assets/gzh.png'),title:'链尚单车微信公众号',href:'javascript:void(0)',content:'配合微信公众平台开发者文档，在MVC框架下搭建的一个租车服务公众号(负责开发地图以及用户信息部分)'}
            ]
          },
          {
            con:[
              {src:require('../assets/pt.png'),title:'普信达智慧环卫平台',href:'javascript:void(0)',content:'公司内部使用的管理平台，具有地图、报表、统计、管理及预警多项功能(负责开发地图、报表及部分表单页面)'},
              {src:require('../assets/wz.png'),href:'http://www.posinda.com/',title:'普信达宣传网站',content:'公司对外展示与宣传网站(负责完成代码按需重构及交互制作)'}
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
</style>
