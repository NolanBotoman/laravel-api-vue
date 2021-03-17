<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<ion-header>
				<ion-toolbar>
					<ion-title size="medium ion-text-uppercase">Camille-Flammarion</ion-title>
				</ion-toolbar>
			</ion-header>
			<AboutContainer />
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import {defineComponent} from 'vue'
import AboutContainer from '@/components/AboutContainer.vue';

export default defineComponent({
	name: 'About',
	components: { AboutContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>