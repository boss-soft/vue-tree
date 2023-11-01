import type { IElement, IStoredElements } from '@/types/main.interfaces';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const elementsStore = defineStore('treeElements', () => {
  const tree = ref<IStoredElements | null>(null);

  function getChildren(parentId: number) {
    const result: IElement[] = [];
    if (tree.value) {
      for (const id in tree.value) {
        const element = tree.value[id];
        if (element.parentId == parentId) {
          result.push(element);
        }
      }
    }
    return result;
  }

  function changeName(id: number, name: string) {
    if (tree.value) tree.value[id].name = name;
  }

  function deleteElement(id: number) {
    if (tree.value) delete tree.value[id];
  }

  function fillTree() {
    tree.value = {
      0: {
        id: 0,
        type: 'dir',
        name: '',
        parentId: -1,
      },
      1: {
        id: 1,
        type: 'dir',
        name: 'Dir 1',
        parentId: 0,
      },
      2: {
        id: 2,
        type: 'dir',
        name: 'Dir 1-1',
        parentId: 1,
      },
      3: {
        id: 3,
        type: 'file',
        name: 'File 1-1-1',
        parentId: 2,
      },
      4: {
        id: 4,
        type: 'file',
        name: 'File 1-2',
        parentId: 1,
      },
      5: {
        id: 5,
        type: 'dir',
        name: 'Dir 2',
        parentId: 0,
      },
      6: {
        id: 6,
        type: 'dir',
        name: 'Dir 2-1',
        parentId: 5,
      },
      7: {
        id: 7,
        type: 'file',
        name: 'File 2-2',
        parentId: 5,
      },
      8: {
        id: 8,
        type: 'file',
        name: 'File 2',
        parentId: 0,
      },
    };
  }

  return { tree, fillTree, getChildren, changeName, deleteElement };
});
