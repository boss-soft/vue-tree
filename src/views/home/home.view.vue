<script lang="ts">
import Element from '@/components/element/element.component.vue';
import { elementsStore } from '@/stores/elements.store';
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  components: { Element },
  setup() {
    const treeStore = elementsStore();
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; //для генерации случайных чисел
    const forceUpdate = ref('update');

    watch(
      () => treeStore, //при изменении содержимого стора (сделано для отлавливания удаления позиции)
      () => {
        let result = '';
        for (let i = 0; i < 13; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        forceUpdate.value = result; //меняем ключ родительского элемента для перерисовки всего, что внутри div
      },
      { deep: true },
    );

    return {
      forceUpdate,
    };
  },
});
</script>

<template src="./home.view.html"></template>

<style scoped></style>