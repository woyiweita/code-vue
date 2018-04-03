<template>
<div>
<!-- 
  -- 事件绑定的应用 表单事件绑定
  -- v-on: 事件绑定 简写 @
  -- v-model: 表单双向数据绑定
-->

<input type="text" v-model="name"> <br><br>
<textarea name="description" cols="30" rows="3" v-model="description"></textarea><br><br>
<input type="checkbox" v-model="checked"><span :class="['text-blue',{'font-italic': checked}]">看我72变！</span><br><br>
<p class="background-gray"><span class="text-red">{{name}}</span></p>
<p class="background-gray"><span class="text-blue">{{description}}</span></p>
<ul>
	<li><input type="checkbox" v-model="coked" value="apple"></li>
	<li><input type="checkbox" v-model="coked" value="orange"></li>
	<li><input type="checkbox" v-model="coked" value="banana"></li>
</ul>
<p>{{coked}}</p>
<ul>
	<li><input type="radio" v-model="liked" value="apple"></li>
	<li><input type="radio" v-model="liked" value="orange"></li>
	<li><input type="radio" v-model="liked" value="banana"></li>
</ul>
<p>{{liked}}</p>
<select name="vegetables" v-model="likeVege">
	<option v-for="item in list" :value="item.name" v-text="item.name"></option>
</select>
<p class="background-gray"><span class="text-blue">喜欢的蔬菜是{{likeVege}}</span></p>
</div>
</template>
<script>
	export default {
		name: 'myFive',
		data () {
			return {
				name: 'Yih Charles',
				description: '随便写点儿……',
				checked: false,
				coked:[],
				liked: '',
				likeVege:'',
				list: [
					{
						name: '洋葱',
						price: '4.90',
						weight: '500g'
					},
					{
						name: '菠菜',
						price: '6.90',
						weight: '250g'
					},
					{
						name: '生姜',
						price: '2.90',
						weight: '100g'
					},
					{
						name: '圣女果',
						price: '6.90',
						weight: '380g'
					},
					{
						name: '西红柿',
						price: '8.90',
						weight: '600g'
					},
					{
						name: '香菇',
						price: '8.50',
						weight: '250g'
					},
					{
						name: '黄瓜',
						price: '7.90',
						weight: '450g'
					},
					{
						name: '香菜',
						price: '5.90',
						weight: '150g'
					},
					{
						name: '金针菇',
						price: '2.90',
						weight: '150g'
					},
					{
						name: '土豆',
						price: '5.90',
						weight: '500g'
					},
					{
						name: '山药',
						price: '10.90',
						weight: '400g'
					}
				]
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
	.text-red {color: #f00;}
	.text-blue {color: #007eff;}
	.background-gray {background-color: #eee;}
	.font-italic {font-style: italic;}
	ul {padding-left: 0; list-style: none;}
	li {padding: 5px 12px; margin-bottom: 3px;}
	li.odd {color: #fff; background-color: #7dcaff;}
</style>