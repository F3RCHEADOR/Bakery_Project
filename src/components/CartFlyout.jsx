import { useStore } from "@nanostores/react";
import { isProductOpen, cartProducts } from "@/productStore";
import CartFlyoutToggle from "@/components/CartFlyoutToggle.jsx";

export function BlurWindow() {
  const $isProductOpen = useStore(isProductOpen);
  return $isProductOpen ? (
    <div className="w-full h-screen fixed z-30 top-0 right-0 blur-xl bg-black opacity-30"></div>
  ) : null;
}

export default function CartFlyout() {
  const $isProductOpen = useStore(isProductOpen);
  const $cartProducts = useStore(cartProducts);
  return $isProductOpen ? (
    <>
      <BlurWindow />
      <aside className="w-56 md:w-80 h-screen border-l-4 fixed top-0 right-0 bg-red-100 z-40 py-4 px-2">
        <CartFlyoutToggle />
        {Object.values($cartProducts).length ? (
          <ul className="space-y-1">
            {Object.values($cartProducts).map((cartProduct) => (
              <li className="flex items-center justify-around border-2 rounded-xl bg-white h-32 p-2 " key={cartProduct.id}>
                <img className="w-20 md:w-36 " src={cartProduct.imageSrc} alt={cartProduct.name} />
                <div><h3 className="font-script text-lg">{cartProduct.name}</h3>
                  <p className="text-sm ">Unit Value: <span className="text-md font-semibold">${cartProduct.price}</span></p>
                  <p className="text-sm ">Cantidad: <span className="text-md font-semibold">{cartProduct.quantity}</span></p></div>

              </li>
            ))}
            <button className="flex space-x-1 items-center mx-auto p-2 border-4 bg-green-300 rounded-xl font-bold text-sm my-4 hover:bg-green-400 hover:scale-110 duration-200"><span>Comprar</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </button>
          </ul>
        ) : (
          <p className="text-center text-base font-bold bg-white">Carrito Vacio</p>
        )}
      </aside>
    </>
  ) : null;
}
