<template>
<div>
<!-- 事件绑定的应用 在自定义组件上绑定自定义事件-->
<com-a @my-emit="say"></com-a>
<!-- 这里的自定义标签使用 comA 或者 com-a 都可以正常加载 -->
</div>
</template>
<script>
import comA from './ComA'
	export default {
		components:{
			comA
		},
		name: 'myFive',
		data () {
			return {
				n: 0,
				name: 'World',
				changeV:'123'
			}
		},
		methods:{ // 放置事件执行函数
			say (str) {
				console.info('Hi! '+str);
			}
		}
	}
</script>
<style>
	p {margin-top: 0; margin-bottom: 10px; padding: 12px 24px; font-size: 14px;}
</style>