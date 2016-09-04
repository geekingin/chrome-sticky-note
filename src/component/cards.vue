<template>
	<ul>
		<card v-for="card in cards" :content="card.content"></card>
	</ul>
</template>
<script>
	import card from './card.vue'
	export default {
		components: {
			card
		},
		props: ['cards']
	}
</script>