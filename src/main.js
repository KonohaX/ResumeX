// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import Work from './components/Work'
import Project from './components/Project'
import Skill from './components/Skill'
import Education from './components/Education'
import Contact from './components/Contact'
import './css/jquery.pagepiling.css'
import './css/bootstrap.min.css'
import './css/main.css'
import './js/jquery.min.js'
import './js/jquery-ui.min.js'
import './js/jquery.pagepiling.min.js'

Vue.config.productionTip = false;

/* 部件部分开始 */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
new Vue({
  el: '#project',
  template: '<Project/>',
  components: { Project }
});
new Vue({
  el: '#work',
  template: '<Work/>',
  components: { Work }
});
new Vue({
  el: '#skill',
  template: '<Skill/>',
  components: { Skill }
});
new Vue({
  el: '#education',
  template: '<Education/>',
  components: { Education }
});
new Vue({
  el: '#contact',
  template: '<Contact/>',
  components: { Contact }
});
/* 部件部分结束 */
/* 翻页插件部分开始 */
var deleteLog = false;
$('#pagepiling').pagepiling({
	menu: '#menu',
	anchors: ['page1', 'page2', 'page3'],
	navigation: {
		'position': 'right',
        'tooltips': ['首页', '项目','工作经验','技能', '教育', '联系']
    },
  loopBottom:true,
	onLeave:function(index, nextIndex, direction){
		var pageN = $('.section');
		for(var i= 0;i<pageN.length;++i){
			if(i + 1 !== nextIndex){
				$(pageN[i]).addClass('leaving');
			}else{
			    $(pageN[i]).removeClass('leaving');
			}
		}
	}
});
/* 翻页插件部分结束*/
