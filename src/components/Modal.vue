<script lang="ts">
export default {
    data() { return { showCustomContent: false } },
    props: {
        modelo: String,
        descripcion: String,
        imagen: String,
    },
    created() {
        // console.log(this.modelo)
    }
}
</script> 

<template>
    <va-button @click="showCustomContent = !showCustomContent">
        Ver más
    </va-button>
    <va-modal v-model="showCustomContent" no-padding>
        <template #content="{ ok }">
            <!-- <va-image :ratio="16 / 9" :src="imagen" /> -->
            <img :src="imagen" alt="">
            <va-card-title>
                {{ modelo }}
            </va-card-title>
            <va-card-content>
                {{descripcion}}
            </va-card-content>
            <va-card-actions>
                <va-button @click="ok" color="warning">Cerrar</va-button>
            </va-card-actions>
        </template>
    </va-modal>
</template> 