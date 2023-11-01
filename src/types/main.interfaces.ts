
export type TElementTypes = 'dir' | 'file';
export interface IElement {
  id: number;
  name?: string;
  type?: TElementTypes;
  parentId?: number;
}

export interface IStoredElements {
  [key: number]: IElement
}