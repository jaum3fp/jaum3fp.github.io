<script setup lang="ts">
import type { Repo } from '~/types/repo';

const props = defineProps<Repo>()

const getUrl = (topic: string) => {
    const type = ["django"].includes(topic) ? "plain" : "original"
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${topic}/${topic}-${type}.svg`
}

</script>

<template>
    <div class="repo-card">

        <header>

            <h3>{{ props.name }}</h3>
            <div class="icons-container">
                <img v-if="props.topics" 
                    v-for="topic in props.topics" 
                    :key="topic" 
                    :src="getUrl(topic)" 
                    :alt="topic" />
            </div>

        </header>

        <p>{{ props.description }}</p>

    </div>
</template>

<style scoped>

.repo-card {
    width: 100%;
    transform-origin: center center;
    transition: transform 0.3s ease;
    border-radius: 1em;
}

.repo-card:hover {
    background-color: var(--color-primary-container);
    transform: scale(1.04);
    margin: -1em;
    padding: 1em;
    cursor: pointer;
}

p {
    margin-top: 0;
}

img {
    height: 30px;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
}

</style>