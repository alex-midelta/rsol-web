<script lang="ts">

export default {
    data() {
        return {
            value: 0,
            items: [
                'https://picsum.photos/1500',
                'https://picsum.photos/1501',
                'https://picsum.photos/1502',
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