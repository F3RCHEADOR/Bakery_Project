
import { useStore } from '@nanostores/react';
import { isProductOpen } from '../productStore.ts';

export default function CartButton() {
  // read the store value with the `useStore` hook
  const $isProductOpen = useStore(isProductOpen);
  // write to the imported store using `.set`
  return (
    <button onClick={() => isProductOpen.set(!$isProductOpen)}>cart</button>
  )
}


