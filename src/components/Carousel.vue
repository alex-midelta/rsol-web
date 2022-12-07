<script lang="ts">

export default {
    data() {
        return {
            value: 0,
            items: [
                // 'https://picsum.photos/1500',
                // 'https://picsum.photos/1501',
                // 'https://picsum.photos/1502',
                'https://radioskenwood.cl/wp-content/uploads/2020/08/2.jpg',
                'https://www.climafrv.com/blog/wp-content/uploads/2018/01/ventajas-energia-solar-e1515578784410.jpg',
                'https://cdn.forbes.com.mx/2021/08/camara.jpg',
            ],
        }
    },
}
</script>

<template>
    <!-- <va-carousel :items="items" v-model="value" /> -->
    <va-carousel :items="items" v-model="value" :arrows="false" stateful autoscroll :autoscrollInterval="4000" infinite
        swipable :ratio="14 / 6">
        <template #indicator="{ index }">
            <!-- Go to {{ index }} -->
            <button class="button is-ghost is-rounded is-small is-responsive">
                <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-circle" />
                </span>
            </button>
        </template>
        <!-- <template #default="{ index }">
            {{ index + 1 }}
        </template> -->
    </va-carousel>
</template>