<script lang="ts">

export default {
    data() {
        return {
            value: 0,
            items: [
                'https://picsum.photos/1500',
                'https://picsum.photos/1501',
                'https://picsum.photos/1502',
                'https://picsum.photos/1503',
                'https://picsum.photos/1504',
            ],
        }
    },
}

</script>

<template>
    <!-- <va-carousel :items="items" v-model="value" /> -->
    <va-carousel :items="items" v-model="value" :indicators="false" stateful autoscroll :autoscrollInterval="4000"
        infinite swipable :ratio="14 / 6">
        <!-- <template #default="{ index }">
            {{ index + 1 }}
        </template> -->
    </va-carousel>
</template>