<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<ion-header>
				<ion-toolbar>
					<ion-title size="medium ion-text-uppercase">Camille-Flammarion</ion-title>
				</ion-toolbar>
			</ion-header>
			<BookingContainer :schedules="schedules" @createBooking="createBooking" @toastMessage="toastMessage" />
		</ion-content>
		<toast ref="Toast"></toast>
	</ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import {defineComponent} from 'vue';
import BookingContainer from '@/components/BookingContainer.vue';

import Toast from "@/views/Toast.vue";

export default defineComponent({
	name: 'Booking',
	data() {
		return {
			schedules: []
		} as any
	},
	methods: {
		fetchSchedules() {
			fetch('https://observatoire-laravel-api.herokuapp.com/api/informations')
			.then((response)=>{
				response.json().then((data) => {
					for (let i = 0; i <= (data.end - data.start); i += data.duration) {
						const hour = data.start + i;
						this.schedules.push(hour);
					}
				});
			});
		},
		createBooking(booking) {
			fetch('https://observatoire-laravel-api.herokuapp.com/api/réservation', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'email': booking.email,
					'date': booking.date,
					'hour': booking.hour
				})
			}).then((response) => {
				response.json().then((data) => {
					this.toastMessage(String(data.Result));
				});
			}).catch(console.error)
		},
		toastMessage(message) {
			this.$refs.Toast.openToast(message);
		}
	},
	mounted() {
		this.fetchSchedules()
	},
	components: { BookingContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, Toast }
});
</script>