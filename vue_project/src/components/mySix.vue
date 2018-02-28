<template>
<div>
<!-- 事件绑定的应用-->
	<button v-on:click="n +=1">value{{n}}</button> <br>
	<button v-on:click="getName">{{name}}</button> <br>
	<button v-on:click="setName('Vue.js')">{{name}}</button> <br>
	<input type="text" v-model="changeV" v-on:keydown.enter="onKeydown"> <br>
	<input type="text" v-model="changeV" v-on:keydown.13.once="onKeydown"> <br>
<!-- 这里应用到了 v-model 表单输入框的双向绑定 -->
<!--
  -- 事件修饰符
  -- .stop 阻止冒泡
  -- .prevent 
  -- .capture 使用事件捕获模式
  -- .self 只有event.target 是自身时才触发
  -- .once 事件只触发一次
  -- .passive
  -- 
  -- 
  --  按键修饰符
  -- .enter
  -- .tab
  -- .delete (捕获“删除”和“退格”键)
  -- .esc
  -- .space
  -- .up
  -- .down
  -- .left
  -- .right
  -- 
  -- 
-->
</div>
</template>
<script>
	export default {
		name: 'mySix',
		data () {
			return {
				n: 0,
				name: 'World',
				changeV:'123'
			}
		},
		methods:{ // 放置事件执行函数
			getName () {
				console.info(this.name);
			},
			setName (str) {
				this.name = str;
			},
			onKeydown (event) {
				console.info(this.changeV);
				event.target.blur();
			}
		}
	}
</script>
<style>
	p {margin-top: 0; margin-bottom: 10px; padding: 12px 24px; font-size: 14px;}
</style>