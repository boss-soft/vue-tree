<script lang="ts">
import { elementsStore } from '@/stores/elements.store';
import type { IElement } from '@/types/main.interfaces';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Element',

  components: {
    Element,
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
    depth: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  setup(props) {
    const treeStore = elementsStore();
    const thisElement = ref<IElement>();
    if (treeStore.tree) {
      thisElement.value = treeStore.tree[props.id];
    }
    const myLittleTree = ref(treeStore.getChildren(props.id));

    function rename() {
      const type = thisElement.value!.type === 'dir' ? 'папки' : 'файла';
      let newName = prompt(`Введите новое имя ${type}`, thisElement.value!.name);
      if (newName) {
        treeStore.changeName(thisElement.value!.id, newName);
      }
    }

    function deleteThis() {
      treeStore.deleteElement(thisElement.value!.id);
    }

    return {
      thisElement,
      myLittleTree,
      depth: props.depth,
      rename,
      deleteThis,
    };
  },
});
</script>

<template src="./element.component.html"></template>