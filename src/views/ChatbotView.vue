<script setup lang="ts">
import Chatbot from '@/components/Chatbot.vue';


</script>
<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container has-text-centered chatbot-container">
                <p class="title">
                    Chatbot
                </p>
                <br>
                <Chatbot></Chatbot>
            </div>
        </div>
    </section>
</template>

<style>
.chatbot-container {
    width: max-content;
}
</style>