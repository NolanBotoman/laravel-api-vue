<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<ion-header>
				<ion-toolbar>
					<ion-title size="medium ion-text-uppercase">Camille-Flammarion</ion-title>
				</ion-toolbar>
			</ion-header>
			<SchedulesContainer />
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import {defineComponent} from 'vue'
import SchedulesContainer from '@/components/SchedulesContainer.vue';

export default defineComponent({
	name: 'Schedules',
	components: { SchedulesContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>