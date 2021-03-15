<template>
	<div id="container">
		<h5 class="ion-custom-margin-bottom">
			<strong>Réserver dès maintenant votre observation à la tour de la Sorbonne.</strong>
		</h5>
		<p class="ion-custom-margin-bottom">L’observatoire est disponible sur réservation pour une durée d'une heure. Pour cela veuillez vous inscrire via ce formulaire. Un mail de confirmation vous sera envoyé avec vos informations de réservation.</p>
		<ion-list lines="full" class="ion-no-margin">
			<ion-item class="ion-no-padding ion-text-uppercase">
				<ion-label>email</ion-label>
				<ion-input placeholder="adresse de réservation"></ion-input>
			</ion-item>
			<ion-item class="ion-no-padding ion-text-uppercase">
				<ion-label>date</ion-label>
				<ion-input type="date"></ion-input>
			</ion-item>
			<ion-item class="ion-no-padding ion-text-uppercase">
				<ion-label>horaires</ion-label>
				<ion-select interface="action-sheet" @ionChange="search">
					<ion-select-option v-for="(value, key) in schedules" :key="key" :value="value">{{ value }}</ion-select-option>
				</ion-select>
			</ion-item>
		</ion-list>
	</div>
</template>

<script lang="ts">

import {
	IonLabel,
	IonInput,
	IonItem,
	IonList
} from "@ionic/vue";

export default {
	name: 'BookingContainer',
	components: {
		IonLabel,
		IonInput,
		IonItem,
		IonList
	}
}
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

#container strong {
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