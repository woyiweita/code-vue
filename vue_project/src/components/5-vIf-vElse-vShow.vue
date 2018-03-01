<template>
<div>
<!-- 指令 v-show v-if v-else 的使用-->
	<p>
		<span class="text-red" v-if="isTrue">ItemA</span>
		<span class="text-blue" v-else>ItemB</span>
	</p>
	<p class="text-blue background-gray font-italic" v-show="isTrue">显示与隐藏之间的切换</p>
	<p><button @click="toggle">toggle</button></p>
</div>
</template>
<script>
	export default {
		name: 'myFive',
		data () {
			return {
				isTrue: true,
			}
		},
		methods:{ // 放置事件执行函数
			toggle () {
				this.isTrue = !this.isTrue;
			}
		}
	}
</script>
<style>
	p {margin-top: 0; margin-bottom: 10px; padding: 12px 24px; font-size: 14px;}
	.text-red {color: #f00;}
	.text-blue {color: #007eff;}
	.background-gray {background-color: #eee;}
	.font-italic {font-style: italic;}
</style>