// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import mySecond from './components/MySecond'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

 // // eslint-disable no-new 
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

/**
 * 迈出第一步
 * @type {String}
 */
// new Vue({
// 	el: '#app',
// 	template: '<p>{{ welcome }}</p>', // 加载一个组件
// 	data: {
// 		welcome: 'Hello world!'
// 	}
// });

/**
 * 组件注册
 */
// 全局注册
// Vue.component('my-welcome',{
// 	template: '<p>Hello {{name}}! data</p>',
// 	data: function(){ // 需要注意，此处的data必须是函数
// 		return {name: 'Vue.js'}
// 	}
// });
// new Vue({
// 	el: '#app'
// });

// 局部注册
// var myWelcome = {
// 	template: '<p>Hello {{name}}!</p>',
// 	data: function(){
// 		return {name: 'Vue.js'};
// 	}
// }
// new Vue({
// 	el: '#app',
// 	components:{
// 		'my-welcome': myWelcome
// 	}
// });

// 局部注册，多层嵌套
// 第二层级
// var myWelcomeChild = {
// 	template: '<span>Hello {{name}}!</span>',
// 	data: function(){
// 		return {name: 'Vue.js'};
// 	}
// }
// // 第一层级
// var myWelcome = {
// 	template: '<p>Hello {{name}}!<br><my-welcome-child></my-welcome-child></p>',
// 	data: function(){
// 		return {name: 'World'};
// 	},
// 	components: {
// 		'my-welcome-child': myWelcomeChild
// 	}
// }
// new Vue({
// 	el: '#app',
// 	components: {
// 		'my-welcome': myWelcome
// 	}
// });

new Vue({
	el: '#app',
	render: t => t(mySecond)
});