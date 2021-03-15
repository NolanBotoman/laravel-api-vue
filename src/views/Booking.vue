<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<ion-header collapse="condense">
				<ion-toolbar>
					<ion-title size="large">Camille-Flammarion</ion-title>
				</ion-toolbar>
			</ion-header>
			<BookingContainer :schedules="schedules" />
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import {defineComponent} from 'vue'
import BookingContainer from '@/components/BookingContainer.vue';

export default defineComponent({
	name: 'Booking',
	data() {
		return {
			schedules: []
		}
	},
	methods: {
		fetchSchedules() {
			fetch('https://observatoire-laravel-api.herokuapp.com/api/data')
            .then((response)=>{
                response.json().then((data)=> {
                    this.schedules = data.schedules;
                });
            });
		}
	},
	mounted() {
		this.fetchSchedules()
	},
	components: { BookingContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }

});
</script>