<template>
<div>
<!--关于 v-bind 指令的操作应用-->
	<p :class="textRed">Item1</p>
	<p :class="classNames">Item2</p>
	<p :class="classNameAry">Item3</p>
	<p :class="[textBlue,backgroundGray]">Item4</p>
	<p :class="[textBlue,backgroundGray,'font-italic']">Item5</p>
	<p :class="[textBlue,backgroundGray,{'font-italic':isTrue}]" v-on:click="toggle">点击切换斜体</p>
</div>
</template>
<script>
	export default {
		name: 'myFour',
		data () {
			return {
				'textRed': 'text-red',
				'textBlue':'text-blue',
				'backgroundGray': 'background-gray',
				'isTrue': false,
				classNames: {
					'text-red' : false,
					'background-gray' : true
				},
				classNameAry: ['text-red','background-gray']
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