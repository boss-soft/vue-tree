<script lang="ts" setup>
import { elementsStore } from '@/stores/elements.store';
import HomeView from '@/views/home/home.view.vue';
import { onMounted } from 'vue';

const treeStore = elementsStore();

onMounted(() => {
  treeStore.fillTree();
});
</script>

<template>
  <div class="container">
    <home-view></home-view>
  </div>
</template>