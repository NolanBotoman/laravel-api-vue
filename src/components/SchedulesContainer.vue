<template>
	<div id="container">
		<h5 class="ion-custom-margin-bottom">
			<strong>Nos horaires d'ouvertures.</strong>
		</h5>
		<ul>
			<li>
				<strong>Lundi</strong> 9h - 18h
			</li>
			<li>
				<strong>Mardi</strong> 9h - 18h
			</li>
			<li>
				<strong>Jeudi</strong> 9h - 18h
			</li>
			<li>
				<strong>Vendredi</strong> 9h - 18h
			</li>
			<li>
				<strong>Samedi</strong> Fermé
			</li>
			<li>
				<strong>Dimanche</strong> Fermé
			</li>
		</ul>
	</div>
</template>
<script lang="ts">
	import {defineComponent} from 'vue'

	export default defineComponent({
		name: 'AboutContainer',
	});
</script>

<style scoped>
#container {
	position: absolute;
	left: 0;
	right: 0;
	margin: 17px;
}

#container ul {
	list-style: none;
	padding: 0;
}

#container li:first-child {
	border-top: 1px grey solid;
}

#container li {
	padding: 15px 0px;
	border-bottom: 1px grey solid;
}

#container .ion-custom-margin-bottom {
	margin-bottom: 25px;
}

#container ion-button {
	margin: 30px 0px;
}

#container h5 strong {
	font-size: 20px;
	line-height: 26px;
}

#container p {
	font-size: 16px;
	line-height: 22px;
	color: #8c8c8c;
	margin: 0;
}

#container a {
	text-decoration: none;
}
</style>