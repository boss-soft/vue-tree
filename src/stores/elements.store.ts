import type {IStoredElements} from '@/types/main.interfaces';
import {defineStore} from 'pinia';
import {ref} from 'vue';

export const elementsStore = defineStore('counter', () => {
   const tree = ref<IStoredElements>();
   
   function fillTree() {
      tree.value = {
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
   
   return {tree, fillTree};
});
