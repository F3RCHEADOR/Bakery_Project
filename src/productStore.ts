import { atom, map } from 'nanostores';

export const isProductOpen = atom(false);

export type CartProduct = {
  id: string,
  name: string,
  imageSrc: string,
  quantity: number
}

export const cartProducts = map<Record<string, CartProduct>>({});

type ItemDisplayInfo = Pick<CartProduct, 'id' | 'name' | 'imageSrc'>;
export function addCartProduct({ id, name, imageSrc }: ItemDisplayInfo) {
  const existingEntry = cartProducts.get()[id];
  if (existingEntry) {
    cartProducts.setKey(id, { ...existingEntry, quantity: existingEntry.quantity + 1 })
  } else {
    cartProducts.setKey(
      id, {
      id, name, imageSrc, quantity: 1
    }
    );
  }
}