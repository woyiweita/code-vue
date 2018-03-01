<template>
<div>
	<p>{{welcome}}</p>
	<input type="text" v-model="value" @keydown.enter="onKeydown">
</div>
</template>
<script>
export default {
	data () {
		return {
			welcome: 'Hello World!',
			value: 'Yih Charles'
		}
	},
	methods: {
		onKeydown () {
			this.$emit('my-emit',this.value);
		}
	}
}
</script>
<style>
	p {margin-top: 0; margin-bottom: 10px; padding: 12px 24px; font-size: 14px;}
</style>