export interface Product {
  id: number;
  type: string;
}

export const products: Product[] = [
  { id: 1, type: 'Notebook' },
  { id: 2, type: 'Pen' },
  { id: 3, type: 'Eraser' }
];
