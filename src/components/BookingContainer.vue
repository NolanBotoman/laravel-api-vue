<template>
	<div id="container">
		<h5 class="ion-custom-margin-bottom">
			<strong>Réserver dès maintenant votre observation à la Tour de la Sorbonne.</strong>
		</h5>
		<p class="ion-custom-margin-bottom">L’observatoire est disponible sur réservation pour une durée d'une heure. Pour cela veuillez vous inscrire via ce formulaire. Un mail de confirmation vous sera envoyé avec vos informations de réservation.</p>
		<ion-list lines="full" class="ion-no-margin">
			<ion-item class="ion-no-padding">
				<ion-label>email</ion-label>
				<ion-input v-model="booking.email" placeholder="Adresse mail de réservation"></ion-input>
			</ion-item>
			<ion-item class="ion-no-padding">
				<ion-label>date</ion-label>
				<ion-datetime v-model="booking.date" display-format="DD/MM/YYYY" placeholder="Sélectionner une date"></ion-datetime>
			</ion-item>
			<ion-item class="ion-no-padding">
				<ion-label>horaires</ion-label>
				<ion-select v-model="booking.hour" interface="action-sheet">
					<ion-select-option v-for="schedule in schedules" :key="schedule" >
						{{ schedule + "h00" }}
					</ion-select-option>
				</ion-select>
			</ion-item>
			<ion-item class="ion-no-padding">
				<ion-label>CGU</ion-label>
				<ion-checkbox v-model="booking.cgu"></ion-checkbox>
			</ion-item>
			<ion-button expand="block" fill="outline" @click="submit">Réserver</ion-button>
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
	IonSelect,
	IonSelectOption,
	IonButton,
	IonCheckbox,
	IonDatetime
} from "@ionic/vue";

export default defineComponent({
	name: 'BookingContainer',
	emits: ["createBooking", "toastMessage"],
	props: ["schedules"],
	data() {
		return {
			booking: {
				email: "",
				date: "",
				hour: "",
				cgu: false
			}
		}
	},
	methods: {
		submit() {
			if (this.booking.cgu == false) {
				this.$emit('toastMessage', "Vous devez accepter nos conditions d'utilisation pour réserver une observation.");
			}
			else if (this.booking.email == "" || this.booking.date == "" || this.booking.hour == "") {
				this.$emit('toastMessage', "Vous devez compléter tous les champs.");
			} 
			else if (!this.booking.email.includes("@")) {
				this.$emit('toastMessage', "Vous devez rentrer un email valide.");
			} 
			else {
				this.booking.hour = String(this.booking.hour.split("h")[0]);
				this.booking.date = String(this.booking.date.split("T")[0]);

				this.$emit('createBooking', this.booking);
			}	
		}
	},
	components: {
		IonLabel,
		IonInput,
		IonItem,
		IonList,
		IonSelect,
		IonSelectOption,
		IonButton,
		IonCheckbox,
		IonDatetime
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

#container ion-input {
	text-align: right;
}

#container ion-list ion-item ion-label {
	text-transform: uppercase;
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