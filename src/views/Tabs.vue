<template>
    <ion-page>
        <ion-tabs>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1" href="/observatoire/à-propos">
                    <ion-icon :icon="triangle" />
                    <ion-label>À Propos</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab2" href="/observatoire/horaires">
                    <ion-icon :icon="ellipse" />
                    <ion-label>Horaires</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="tab3" href="/observatoire/réservation">
                    <ion-icon :icon="square" />
                    <ion-label>Réserver</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">

import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
    name: 'Tabs',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
    setup() {
        return {
            ellipse, 
            square, 
            triangle,
        }
    }
}
</script>