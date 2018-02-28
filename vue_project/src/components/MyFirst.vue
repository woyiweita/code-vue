<template>
<!-- 构建一个自定义组件，并能够实现数据绑定 -->
<!-- 在组件中需要注意，data 必须是一个函数！ -->
	<div>
		<p v-bind:title="ms" v-text="msg">aa</p>
		<p v-html="msghtml">bb</p>
	</div>
</template>

<script>
	export default {
		name: 'MyFirst',
		data: function () {
			return {
				ms: 'This is "v-bind"',
				msg: '这是一段文本信息',
				msghtml: '<span>这是一段HTML代码</span>'
			}
		}
	}
</script>
<style>
	p {padding: 5px 12px; margin-bottom: 6px; font: 14px/1.4 "微软雅黑"; color: #333;}
</style>