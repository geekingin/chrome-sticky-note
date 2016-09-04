<template>
	<div class="index">
		this is index
		<cards :cards="cards"></cards>
	</div>
</template>

<script>
	import cards from '../component/cards.vue'
	import card from '../component/card.vue'

	export default {
		components: {
			cards,
			card
		},
		data() {
			return {
				cards: [{
					content: 'this is card1'
				}, {
					content: 'this is card2'
				}]
			}
		}
	}
</script>