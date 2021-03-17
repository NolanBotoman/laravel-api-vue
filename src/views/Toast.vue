<script>
    import { 
        IonButton, 
        IonContent, 
        IonPage, 
        toastController 
    } from '@ionic/vue';
     
    import {defineComponent} from 'vue';

    export default defineComponent({
        components: { 
            IonButton, 
            IonContent, 
            IonPage },
        methods: {
            async openToast(content) {
                const toast = await toastController
                    .create({
                        message: content,
                        duration: 2000
                    })
                return toast.present();
            },
        },
    });
</script>