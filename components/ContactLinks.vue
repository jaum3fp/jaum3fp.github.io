<script setup lang="ts">

const props = defineProps<{
    mail: string
    linkedin: string
    github: string
}>()

</script>

<template>

    <div class="social-media">

        <p>Sígueme en:</p>

        

    </div>

</template>

<style scoped>

.social-media {
    display: flex;
    align-items: center;
    gap: 0.8em;
}

</style>