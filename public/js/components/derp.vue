<template>
	<div id="derp-component">
		<h1>I am the derp component</h1>
		<div v-if="derp">Derp container</div>
		<button @click="derpToggle">Derp</button>
	</div>
</template>

<script>
	export default {

		data(){
			return {
				derp: true
			};
		},

		mounted(){
			console.log("Derp component mounted");
		},

		methods: {
			derpToggle(){
				this.derp = !this.derp;
			}
		}
	}
</script>