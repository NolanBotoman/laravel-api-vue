<template>
	<div id="container">
		<h5 class="ion-custom-margin-bottom">
			<strong>Supprimer votre réservation.</strong>
		</h5>
		<p class="ion-custom-margin-bottom">Vous ne pouvez pas assurer votre réservation ? Vous avez possibilité de l'annuler dès maintenant. Sachez qu'une fois annulé la réservation sera définitivement supprimée de nos service. Votre token de réservation est le n°<strong>{{ token }}</strong></p>
		<ion-list lines="full" class="ion-no-margin">
			<ion-item class="ion-no-padding ion-text-uppercase">
				<ion-label>CGU</ion-label>
				<ion-checkbox v-model="booking.cgu"></ion-checkbox>
			</ion-item>
			<ion-button expand="block" fill="outline" @click="submit">Annuler votre réservation</ion-button>
		</ion-list>
	</div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';

import {
	IonLabel,
	IonInput,
	IonItem,
	IonList,
	IonButton,
	IonCheckbox
} from "@ionic/vue";

export default defineComponent({
	name: 'CancelContainer',
	emits: ["deleteBooking", "toastMessage"],
	props: ["token"],
	data() {
		return {
			booking: {
				token: "",
				cgu: false
			}
		}
	},
	methods: {
		submit() {
			if (this.booking.cgu == false) {
				this.$emit('toastMessage', "Vous devez accepter nos conditions d'utilisation pour annuler votre réservation.");
			} else {
				this.booking.token = this.token;
				this.$emit('deleteBooking', this.booking);
			}	
		}
	},
	components: {
		IonLabel,
		IonInput,
		IonItem,
		IonList,
		IonButton,
		IonCheckbox
	}
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

#container ion-button {
	margin: 30px 0px;
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