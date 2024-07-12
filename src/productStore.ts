import { atom, map } from 'nanostores';

export const isProductOpen = atom(false);

export type CartProduct = {
  id: string,
  name: string,
  price: string,
  imageSrc: string,
  quantity: number
}

export const cartProducts = map<Record<string, CartProduct>>({});

type ItemDisplayInfo = Pick<CartProduct, 'id' | 'name' | 'price' | 'imageSrc'>;
export function addCartProduct({ id, name, price, imageSrc }: ItemDisplayInfo) {
  const existingEntry = cartProducts.get()[id];
  if (existingEntry) {
    cartProducts.setKey(id, { ...existingEntry, quantity: existingEntry.quantity + 1 })
  } else {
    cartProducts.setKey(
      id, {
      id, name, price, imageSrc, quantity: 1
    }
    );
  }
}

export function removeCartProduct({ id, name, price, imageSrc }: ItemDisplayInfo) {
  const existingEntry = cartProducts.get()[id];
  if (existingEntry) {
    cartProducts.setKey(id, { ...existingEntry, quantity: existingEntry.quantity - 1 })
  } else {
    cartProducts.setKey(
      id, {
      id, name, price, imageSrc, quantity: 0
    }
    );
  }
}