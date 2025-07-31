<script setup lang="ts">
import type { Repo } from '~/types/repo'

const { data: repos } = await useFetch<Array<Repo>>('https://api.github.com/users/jaum3fp/repos?sort=created&direction=asc')

const onClickCard = (repoName: string) => window.open(`https://github.com/jaum3fp/${repoName}`, '_blank', 'noopener')

</script>

<template>

    <div class="repoList">
        <template v-if="repos" v-for="repo in repos" :key="repo">

            <RepoCard v-if="!repo.name.includes('jaum3fp')"
                :name="repo.name"
                :description="repo.description"
                :topics="repo.topics" 
                @click="onClickCard(repo.name)"/>

        </template>
    </div>

</template>

<style scoped>

.repoList {
    margin: -1em;
    padding: 1em;
}

.icons-container {
    display: flex;
    gap: 0.5em;
}

</style>