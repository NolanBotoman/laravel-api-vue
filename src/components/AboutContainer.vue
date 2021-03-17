<template>
	<div id="container">
		<h5 class="ion-custom-margin-bottom">
			<strong>L'observatoire et sa Tour de la Sorbonne.</strong>
		</h5>
		<p class="ion-custom-margin-bottom">L’observatoire a été fondé en 1883 par Camille Flammarion. Il est classé monument historique. Son annexe abrite le fonds scientifique privé de Camille Flammarion, le plus important d’Ile-de- France, témoin précieux de l’astronomie et de ses progrès au XIXe et début du XXe siècles. La coupole abrite la lunette de Camille Flammarion de 240 mm de diamètre et 3 600 mm de focale. De monture équatoriale, elle s’inspire d’une de celles de l’Observatoire de Paris. À l’exception de la partie haute, de sa coupole et de sa lunette astronomique qui ont été restaurées récemment et sont en activité, le bâtiment principal est très dégradé. L’édifice nécessite une restauration importante afin de pouvoir à nouveau héberger la collection scientifique de Flammarion. C’est le grand projet qu’a entrepris de mener à bien la SAF dans les années qui viennent et qui nécessite le concours de nombreux partenaires, tant publics que privés. Pour en savoir plus, vous pouvez lire l’article L’observatoire de Juvisy-sur-Orge, l’« univers d’un chercheur » à sauvegarder, écrit par Colette Aymard et Laurence-Anne Mayeur. Vous pouvez aussi consulter un compte rendu des observations faites à l’observatoire, écrit par nos animateurs, un article écrit par Jean-Baptiste Feldmann, qui témoigne de l’intérêt de nos visiteurs pour l’observatoire de Juvisy et un article paru dans le magazine Télérama.</p>
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

#container .ion-custom-margin-bottom {
	margin-bottom: 25px;
}

#container p.ion-custom-margin-bottom {
	margin-bottom: 75px;
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