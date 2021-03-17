<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Camille-Flammarion</ion-title>
				</ion-toolbar>
			</ion-header>
			<CancelContainer @deleteBooking="deleteBooking" :token="token" />
		</ion-content>
		<toast ref="Toast"></toast>
	</ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import {defineComponent} from 'vue';
import { useRoute } from 'vue-router';
import CancelContainer from '@/components/CancelContainer.vue';

import Toast from "@/views/Toast.vue";

export default defineComponent({
	name: 'Cancel',
	methods: {
		deleteBooking(booking) {
			fetch('https://observatoire-laravel-api.herokuapp.com/api/réservation', {
				method: 'DELETE',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'token': booking.token,
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
	components: { CancelContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, Toast },
	setup() {
		const route = useRoute();
		const { token } = route.params;

		return { token };
	}

});
</script>