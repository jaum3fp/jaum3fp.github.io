<script setup lang="ts">
const data = await queryCollection('content').first()
</script>

<template>
  <Hero />
  <ContentRenderer class="content-container md-styles inner" v-if="data" :value="data" />
  <Footer />
</template>

<style scoped>

.content-container {
  background-color: var(--color-background);
  position: relative;
  display: block;
  padding: 20px 10px;
}

</style>
